import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/transgenderorange.png';
import instagramLogo from '../assets/instagram-logo-transparent.png';
import picture1 from '../assets/picture-1.png';
import picture2 from '../assets/picture-2.png';
import picture3 from '../assets/picture-3.png';
import '../styles/TrueOrangeLanding.css';

const INSTAGRAM_URL = 'https://www.instagram.com/trueorangeband/';
/** By 2s from load, if the visitor still hasn’t scrolled, ease them partway toward the lower section */
const SCROLL_HINT_AT_MS = 2000;
/** Custom scroll duration (smooth scroll to ~halfway) */
const AUTO_SCROLL_HALF_MS = 2600;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
}

const SUBSCRIBE_THANKS =
  'Thanks! You will receive updates on our band.';

export default function TrueOrangeLanding() {
  const heroLogoRef = useRef(null);
  const lowerRef = useRef(null);
  const [headerPinned, setHeaderPinned] = useState(false);
  const [emailListValue, setEmailListValue] = useState('');
  const [emailListStatus, setEmailListStatus] = useState('idle');
  const [emailListError, setEmailListError] = useState('');
  const userHasScrolledRef = useRef(false);
  const hintTimerRef = useRef(null);
  const isAutoScrollingRef = useRef(false);
  const autoScrollRafRef = useRef(null);

  useEffect(() => {
    const node = heroLogoRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderPinned(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-12px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');

    const abortAutoScroll = () => {
      if (autoScrollRafRef.current !== null) {
        cancelAnimationFrame(autoScrollRafRef.current);
        autoScrollRafRef.current = null;
      }
      isAutoScrollingRef.current = false;
    };

    const markUserScrolled = () => {
      if (userHasScrolledRef.current) return;
      userHasScrolledRef.current = true;
      if (hintTimerRef.current !== null) {
        window.clearTimeout(hintTimerRef.current);
        hintTimerRef.current = null;
      }
      abortAutoScroll();
    };

    const onScroll = () => {
      if (isAutoScrollingRef.current) return;
      if (window.scrollY > 2 || window.pageYOffset > 2) {
        markUserScrolled();
      }
    };

    const interruptAutoScroll = () => {
      if (isAutoScrollingRef.current) {
        abortAutoScroll();
        markUserScrolled();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('wheel', interruptAutoScroll, { passive: true });
    window.addEventListener('touchstart', interruptAutoScroll, { passive: true });

    hintTimerRef.current = window.setTimeout(() => {
      hintTimerRef.current = null;
      if (userHasScrolledRef.current || window.scrollY > 2) return;
      const el = lowerRef.current;
      if (!el) return;

      const startY = window.scrollY;
      const targetTop = el.getBoundingClientRect().top + window.scrollY;
      const endY = startY + (targetTop - startY) * 0.5;

      if (mq.matches) {
        window.scrollTo(0, endY);
        return;
      }

      isAutoScrollingRef.current = true;
      const t0 = performance.now();

      const step = (now) => {
        if (!isAutoScrollingRef.current) {
          autoScrollRafRef.current = null;
          return;
        }
        const elapsed = now - t0;
        const t = Math.min(1, elapsed / AUTO_SCROLL_HALF_MS);
        const y = startY + (endY - startY) * easeInOutCubic(t);
        window.scrollTo(0, y);
        if (t < 1) {
          autoScrollRafRef.current = requestAnimationFrame(step);
        } else {
          autoScrollRafRef.current = null;
          isAutoScrollingRef.current = false;
        }
      };

      autoScrollRafRef.current = requestAnimationFrame(step);
    }, SCROLL_HINT_AT_MS);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', interruptAutoScroll);
      window.removeEventListener('touchstart', interruptAutoScroll);
      if (hintTimerRef.current !== null) {
        window.clearTimeout(hintTimerRef.current);
      }
      abortAutoScroll();
    };
  }, []);

  const handleEmailListSubmit = async (e) => {
    e.preventDefault();
    setEmailListError('');
    setEmailListStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailListValue.trim() }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setEmailListStatus('success');
        setEmailListValue('');
        return;
      }

      setEmailListStatus('idle');
      setEmailListError(
        typeof data.error === 'string'
          ? data.error
          : 'Something went wrong. Please try again.'
      );
    } catch {
      setEmailListStatus('idle');
      setEmailListError('Could not reach the server. Please try again.');
    }
  };

  return (
    <div className="to-page">
      <header
        className={`to-header${headerPinned ? ' to-header--visible' : ''}`}
        aria-hidden={!headerPinned}
      >
        <div className="to-header-inner">
          <img
            className="to-header-logo"
            src={logo}
            alt=""
            width={1743}
            height={251}
            decoding="async"
          />
        </div>
      </header>

      <section className="to-hero" aria-label="Intro">
        <h1 ref={heroLogoRef} className="to-hero-logo-heading">
          <img
            className="to-hero-logo"
            src={logo}
            alt="True Orange"
            width={1743}
            height={251}
            decoding="async"
          />
        </h1>
      </section>

      <section ref={lowerRef} className="to-lower" aria-label="Links and mailing list">
        <div className="to-lower-inner">
          <h2 className="to-world-tagline">Join the True Orange World</h2>

          <div className="to-block">
            <h3 className="to-block-title">Upcoming Shows</h3>
            <p className="to-block-text">Tickets coming soon.</p>
          </div>

          <div className="to-block">
            <div className="to-instagram-headrow">
              <h3 className="to-block-title to-block-title--row">Instagram</h3>
              <a
                className="to-instagram-icon-link"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="True Orange on Instagram"
              >
                <img
                  className="to-instagram-icon"
                  src={instagramLogo}
                  alt=""
                  width={622}
                  height={622}
                  decoding="async"
                />
              </a>
            </div>
            <p className="to-block-text to-block-text--url">
              <a
                className="to-external-url"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {INSTAGRAM_URL}
              </a>
            </p>
          </div>

          <div className="to-block">
            <h3 className="to-block-title">Email list</h3>
            <p className="to-block-text">Sign up to receive email updates on the band.</p>

            {emailListStatus === 'success' ? (
              <p
                className="to-form-thanks"
                role="status"
                aria-live="polite"
              >
                {SUBSCRIBE_THANKS}
              </p>
            ) : (
              <form className="to-form" onSubmit={handleEmailListSubmit}>
                <label className="to-label" htmlFor="to-email">
                  Email
                </label>
                <div className="to-form-row">
                  <input
                    id="to-email"
                    className="to-input"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={emailListValue}
                    onChange={(evt) => setEmailListValue(evt.target.value)}
                    required
                    disabled={emailListStatus === 'loading'}
                    aria-invalid={emailListError ? 'true' : 'false'}
                    aria-describedby={emailListError ? 'to-email-error' : undefined}
                  />
                  <button
                    className="to-button"
                    type="submit"
                    disabled={emailListStatus === 'loading'}
                    aria-busy={emailListStatus === 'loading'}
                  >
                    {emailListStatus === 'loading' ? 'Signing up…' : 'Sign up'}
                  </button>
                </div>
                {emailListError ? (
                  <p id="to-email-error" className="to-form-error" role="alert">
                    {emailListError}
                  </p>
                ) : null}
              </form>
            )}
            <p className="to-inquiry">
              <span className="to-inquiry-label">Email for inquiries: </span>
              <a className="to-inquiry-mail" href="mailto:info@trueorange.world">
                info@trueorange.world
              </a>
            </p>
          </div>
        </div>

        <div className="to-gallery" role="group" aria-label="Band photos">
          <figure className="to-gallery-figure">
            <img
              className="to-gallery-img"
              src={picture1}
              alt=""
              width={4433}
              height={3264}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="to-gallery-figure">
            <img
              className="to-gallery-img"
              src={picture2}
              alt=""
              width={4433}
              height={3264}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure className="to-gallery-figure">
            <img
              className="to-gallery-img"
              src={picture3}
              alt=""
              width={4433}
              height={3264}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>
    </div>
  );
}
