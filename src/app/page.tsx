'use client';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    // laad widget-scripts & styles
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/react-chat-widget@latest/dist/index.js';
    script.async = true;
    document.body.appendChild(script);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/react-chat-widget/lib/styles.css';
    document.head.appendChild(link);

    script.onload = () => {
      window.Widget.init({
        endpoint: 'https://neviorassistant.com/api/query',
        title: 'Nevior Assistant',
        subtitle: 'Ask me anything about your company',
      });
    };
  }, []);

  return (
    <main style={{ maxWidth: 600, margin: '50px auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Nevior Assistant</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        Jouw private AI-buddy die alles weet over jouw bedrijf.
      </p>
      <div id="chat-widget" />
    </main>
  );
}
