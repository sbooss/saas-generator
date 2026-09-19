import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function FacebookPixel() {
  const router = useRouter();
  const PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

  useEffect(() => {
    if (!PIXEL_ID) return;

    // Carregar o pixel do Facebook
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Rastrear mudanças de página
    const handleRouteChange = (url) => {
      fbq('track', 'PageView');
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [PIXEL_ID, router]);

  return null;
}

// Função para rastrear eventos
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params);
  }
}

// Função para rastrear conversão de compra
export function trackPurchase(value, currency = 'BRL') {
  trackEvent('Purchase', { value, currency });
}

// Função para rastrear lead
export function trackLead() {
  trackEvent('Lead');
}

// Função para rastrear visualização de conteúdo
export function trackViewContent(contentName, contentCategory) {
  trackEvent('ViewContent', { content_name: contentName, content_category: contentCategory });
}
