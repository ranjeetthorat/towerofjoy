"use client";

import React from "react";
import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="hero-visual reveal" aria-label="AI & Automation Integrations">
      <div className="hero-visual__container">
        {/* Ambient Glows */}
        <div className="hero-visual__glow hero-visual__glow--emerald" aria-hidden="true" />
        <div className="hero-visual__glow hero-visual__glow--telegram" aria-hidden="true" />

        {/* Center Node: Your Core Systems */}
        <div className="hero-visual__core">
          <div className="hero-visual__core-badge">
            <span className="hero-visual__pulse" aria-hidden="true" />
            <span>Connected Core</span>
          </div>
          <div className="hero-visual__core-title">Your Business &amp; Trading</div>
          <div className="hero-visual__core-subtitle">Sheets • Bills • APIs • Orders</div>
        </div>

        {/* Floating AI & Platform Cards */}
        {/* 1. ChatGPT */}
        <div className="hero-visual__node hero-visual__node--chatgpt animate-float-1">
          <div className="hero-visual__icon hero-visual__icon--chatgpt">
            <Image
              src="/logos/chatgpt.svg"
              alt="ChatGPT Logo"
              width={26}
              height={26}
              priority
            />
          </div>
          <div className="hero-visual__node-text">
            <span className="hero-visual__node-name">ChatGPT</span>
            <span className="hero-visual__node-sub">Private Docs &amp; Tools</span>
          </div>
        </div>

        {/* 2. Claude */}
        <div className="hero-visual__node hero-visual__node--claude animate-float-2">
          <div className="hero-visual__icon hero-visual__icon--claude">
            <Image
              src="/logos/claude.svg"
              alt="Claude Logo"
              width={26}
              height={26}
              priority
            />
          </div>
          <div className="hero-visual__node-text">
            <span className="hero-visual__node-name">Claude</span>
            <span className="hero-visual__node-sub">In-Depth File Reasoning</span>
          </div>
        </div>

        {/* 3. Google Gemini */}
        <div className="hero-visual__node hero-visual__node--gemini animate-float-3">
          <div className="hero-visual__icon hero-visual__icon--gemini">
            <Image
              src="/logos/gemini.svg"
              alt="Google Gemini Logo"
              width={26}
              height={26}
              priority
            />
          </div>
          <div className="hero-visual__node-text">
            <span className="hero-visual__node-name">Google Gemini</span>
            <span className="hero-visual__node-sub">Fast Search &amp; Data</span>
          </div>
        </div>

        {/* 4. Telegram */}
        <div className="hero-visual__node hero-visual__node--telegram animate-float-4">
          <div className="hero-visual__icon hero-visual__icon--telegram">
            <Image
              src="/logos/telegram.svg"
              alt="Telegram Logo"
              width={26}
              height={26}
              priority
            />
          </div>
          <div className="hero-visual__node-text">
            <span className="hero-visual__node-name">Telegram</span>
            <span className="hero-visual__node-sub">Mobile Alerts &amp; Bots</span>
          </div>
        </div>
      </div>
    </div>
  );
}
