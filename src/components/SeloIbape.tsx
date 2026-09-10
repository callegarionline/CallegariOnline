import React from 'react';

interface SeloIbapeProps {
  className?: string;
  size?: number | string;
}

export const SeloIbape: React.FC<SeloIbapeProps> = ({ className = 'max-h-48 w-auto', size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 520"
      width={size || '100%'}
      height={size || '100%'}
      className={className}
      aria-label="Selo IBAPE Nacional - Profissional Certificado AAA - Engenharia de Avaliações"
      role="img"
    >
      <defs>
        {/* Rich Gold Gradients */}
        <linearGradient id="compGoldScallop" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="25%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="75%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        <radialGradient id="compGoldRadial" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fef9c3" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="80%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#92400e" />
        </radialGradient>

        <linearGradient id="compRibbonGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde047" />
          <stop offset="35%" stopColor="#d97706" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#b45309" />
        </linearGradient>

        <radialGradient id="compSilverRing" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#cbd5e1" />
          <stop offset="85%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#334155" />
        </radialGradient>

        <filter id="compMedalShadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.4" />
        </filter>

        {/* Curved Text Paths */}
        <path id="compOuterTextPathTop" d="M 68,210 A 172,172 0 1,1 412,210" fill="none" />
        <path id="compOuterTextPathBottom" d="M 412,210 A 172,172 0 0,1 68,210" fill="none" />
        <path id="compInnerTextPath" d="M 140,215 A 108,108 0 1,1 340,215" fill="none" />
      </defs>

      <g filter="url(#compMedalShadow)">
        {/* 1. RIBBON (BEHIND MEDALLION) */}
        <g id="compRibbonBanner">
          <polygon points="175,340 305,340 305,485 240,445 175,485" fill="url(#compRibbonGold)" stroke="#b45309" strokeWidth="2.5" />
          <polygon points="182,345 298,345 298,470 240,432 182,470" fill="none" stroke="#fef08a" strokeWidth="1.2" opacity="0.8" />
          <line x1="175" y1="340" x2="305" y2="340" stroke="#78350f" strokeWidth="2" />
          
          <text x="240" y="405" textAnchor="middle" fill="#0f2b5c" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="17" letterSpacing="0.05em">
            ENGENHARIA
          </text>
          <text x="240" y="425" textAnchor="middle" fill="#0f2b5c" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="15" letterSpacing="0.08em">
            DE AVALIAÇÕES
          </text>
        </g>

        {/* 2. SCALLOPED GOLD OUTER RIM */}
        <g id="compScallopEdge" fill="url(#compGoldScallop)" stroke="#b45309" strokeWidth="1.5">
          <circle cx="240" cy="210" r="195" fill="url(#compGoldScallop)" />
          <path d="
            M 240,12
            A 12,12 0 0,1 273,15 A 12,12 0 0,1 305,24 A 12,12 0 0,1 334,39 A 12,12 0 0,1 360,59
            A 12,12 0 0,1 382,83 A 12,12 0 0,1 399,111 A 12,12 0 0,1 411,141 A 12,12 0 0,1 417,173
            A 12,12 0 0,1 417,206 A 12,12 0 0,1 411,238 A 12,12 0 0,1 398,268 A 12,12 0 0,1 379,295
            A 12,12 0 0,1 356,319 A 12,12 0 0,1 329,339 A 12,12 0 0,1 299,353 A 12,12 0 0,1 267,361
            A 12,12 0 0,1 234,362 A 12,12 0 0,1 202,356 A 12,12 0 0,1 172,344 A 12,12 0 0,1 144,325
            A 12,12 0 0,1 120,302 A 12,12 0 0,1 100,275 A 12,12 0 0,1 86,246 A 12,12 0 0,1 78,214
            A 12,12 0 0,1 77,182 A 12,12 0 0,1 82,150 A 12,12 0 0,1 94,120 A 12,12 0 0,1 112,93
            A 12,12 0 0,1 135,69 A 12,12 0 0,1 161,50 A 12,12 0 0,1 190,34 A 12,12 0 0,1 221,24 Z
          " fill="url(#compGoldScallop)" stroke="#b45309" strokeWidth="2" />
        </g>

        {/* Outer concentric gold groove */}
        <circle cx="240" cy="210" r="185" fill="none" stroke="#78350f" strokeWidth="1.5" />
        <circle cx="240" cy="210" r="182" fill="url(#compGoldRadial)" stroke="#fef08a" strokeWidth="1" />

        {/* 3. CIRCULAR TEXT IN GOLD BAND */}
        <g fill="#0f2b5c" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="11.5" letterSpacing="0.08em">
          <text>
            <textPath href="#compOuterTextPathTop" startOffset="50%" textAnchor="middle">
              CONSULTE A VALIDADE DESTE CERTIFICADO NO SITE DO IBAPE
            </textPath>
          </text>
          <text fontSize="12.5" fontWeight="900" letterSpacing="0.12em">
            <textPath href="#compOuterTextPathBottom" startOffset="50%" textAnchor="middle">
              • WWW.IBAPE-NACIONAL.COM.BR •
            </textPath>
          </text>
        </g>

        {/* 4. INNER BEADED RING */}
        <circle cx="240" cy="210" r="150" fill="#334155" stroke="#1e293b" strokeWidth="2" />
        <circle cx="240" cy="210" r="148" fill="url(#compSilverRing)" />
        <circle cx="240" cy="210" r="132" fill="url(#compGoldRadial)" stroke="#78350f" strokeWidth="2" />

        {/* Silver/White Beads along circle */}
        <g fill="#f8fafc" stroke="#475569" strokeWidth="0.5">
          <circle cx="240" cy="70" r="3" />
          <circle cx="262" cy="72" r="3" />
          <circle cx="284" cy="77" r="3" />
          <circle cx="304" cy="86" r="3" />
          <circle cx="323" cy="99" r="3" />
          <circle cx="339" cy="115" r="3" />
          <circle cx="351" cy="133" r="3" />
          <circle cx="360" cy="154" r="3" />
          <circle cx="364" cy="176" r="3" />
          <circle cx="365" cy="198" r="3" />
          <circle cx="361" cy="220" r="3" />
          <circle cx="353" cy="242" r="3" />
          <circle cx="341" cy="261" r="3" />
          <circle cx="325" cy="278" r="3" />
          <circle cx="306" cy="292" r="3" />
          <circle cx="285" cy="301" r="3" />
          <circle cx="263" cy="307" r="3" />
          <circle cx="240" cy="309" r="3" />
          <circle cx="217" cy="307" r="3" />
          <circle cx="195" cy="301" r="3" />
          <circle cx="174" cy="292" r="3" />
          <circle cx="155" cy="278" r="3" />
          <circle cx="139" cy="261" r="3" />
          <circle cx="127" cy="242" r="3" />
          <circle cx="119" cy="220" r="3" />
          <circle cx="115" cy="198" r="3" />
          <circle cx="116" cy="176" r="3" />
          <circle cx="120" cy="154" r="3" />
          <circle cx="129" cy="133" r="3" />
          <circle cx="141" cy="115" r="3" />
          <circle cx="157" cy="99" r="3" />
          <circle cx="176" cy="86" r="3" />
          <circle cx="196" cy="77" r="3" />
          <circle cx="218" cy="72" r="3" />
        </g>

        {/* 5. INNER GOLD CENTER DISC */}
        <g fill="#0f2b5c" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="13" letterSpacing="0.1em">
          <text>
            <textPath href="#compInnerTextPath" startOffset="50%" textAnchor="middle">
              ★ PROFISSIONAL CERTIFICADO ★
            </textPath>
          </text>
        </g>

        {/* Classical Minerva/Athena Helmeted Bust in White & Gold line-art */}
        <g transform="translate(205, 120)" stroke="#0f2b5c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#fffef0">
          <path d="M 22,28 C 22,12 36,4 52,4 C 64,4 74,10 77,20 C 65,16 48,18 36,25 Z" fill="#fff" />
          <line x1="33" y1="13" x2="38" y2="23" strokeWidth="1.5" />
          <line x1="43" y1="8" x2="47" y2="19" strokeWidth="1.5" />
          <line x1="53" y1="7" x2="55" y2="18" strokeWidth="1.5" />
          <line x1="63" y1="9" x2="63" y2="19" strokeWidth="1.5" />

          <path d="M 20,40 C 20,24 35,22 55,22 C 68,22 75,30 75,42 C 72,44 60,40 45,42 C 30,44 24,52 20,40 Z" fill="#fff" />
          <circle cx="48" cy="38" r="6.5" fill="#fef08a" stroke="#0f2b5c" strokeWidth="2" />
          <path d="M 52,38 L 74,31 L 70,36 L 53,40 Z" fill="#fef08a" />

          <path d="M 55,42 C 57,47 62,50 63,55 C 64,57 68,58 70,58 L 65,63 L 68,66 C 65,68 62,68 60,71 C 58,74 56,77 50,78 C 42,79 38,72 38,66" fill="#fff" />
          <path d="M 59,51 Q 63,50 65,52" strokeWidth="1.5" fill="none" />
          
          <path d="M 28,45 C 22,50 14,56 16,68 C 17,76 26,76 30,83 C 33,88 28,94 38,98 C 44,100 48,93 54,92 C 58,91 60,82 56,78" fill="#fff" />
          <path d="M 24,62 C 28,66 32,68 34,74" fill="none" strokeWidth="1.5" />
          <path d="M 32,78 C 36,83 40,84 44,87" fill="none" strokeWidth="1.5" />
          <path d="M 50,78 C 52,86 58,95 68,98 L 46,102 C 38,98 34,92 34,88" fill="#fff" />
        </g>

        {/* Side Stars */}
        <polygon points="175,215 178,223 186,223 180,228 182,236 175,231 168,236 170,228 164,223 172,223" fill="#0f2b5c" />
        <polygon points="305,215 308,223 316,223 310,228 312,236 305,231 298,236 300,228 294,223 302,223" fill="#0f2b5c" />

        {/* Big AAA in bold dark blue */}
        <text x="240" y="278" textAnchor="middle" fill="#0f2b5c" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="32" letterSpacing="0.08em">
          AAA
        </text>

        {/* 6. QR CODE BADGE (BOTTOM RIGHT) */}
        <g id="compQrCodeBadge" transform="translate(325, 340)">
          <rect x="0" y="0" width="125" height="125" rx="14" ry="14" fill="url(#compGoldRadial)" stroke="#fef08a" strokeWidth="3" />
          <rect x="4" y="4" width="117" height="117" rx="11" ry="11" fill="none" stroke="#b45309" strokeWidth="2" />
          
          <g transform="translate(11, 11)">
            {/* Finder pattern top-left */}
            <rect x="0" y="0" width="28" height="28" fill="#0f2b5c" rx="2" />
            <rect x="4" y="4" width="20" height="20" fill="#fef08a" rx="1" />
            <rect x="8" y="8" width="12" height="12" fill="#0f2b5c" rx="1" />

            {/* Finder pattern top-right */}
            <rect x="75" y="0" width="28" height="28" fill="#0f2b5c" rx="2" />
            <rect x="79" y="4" width="20" height="20" fill="#fef08a" rx="1" />
            <rect x="83" y="8" width="12" height="12" fill="#0f2b5c" rx="1" />

            {/* Finder pattern bottom-left */}
            <rect x="0" y="75" width="28" height="28" fill="#0f2b5c" rx="2" />
            <rect x="4" y="79" width="20" height="20" fill="#fef08a" rx="1" />
            <rect x="8" y="83" width="12" height="12" fill="#0f2b5c" rx="1" />

            {/* QR Matrix Bits */}
            <g fill="#0f2b5c">
              <rect x="33" y="2" width="5" height="5" />
              <rect x="42" y="2" width="5" height="5" />
              <rect x="52" y="2" width="5" height="5" />
              <rect x="62" y="2" width="5" height="5" />

              <rect x="33" y="11" width="5" height="5" />
              <rect x="47" y="11" width="5" height="5" />
              <rect x="57" y="11" width="5" height="5" />
              <rect x="67" y="11" width="5" height="5" />

              <rect x="33" y="20" width="5" height="5" />
              <rect x="42" y="20" width="5" height="5" />
              <rect x="52" y="20" width="5" height="5" />
              <rect x="62" y="20" width="5" height="5" />

              <rect x="2" y="33" width="5" height="5" />
              <rect x="11" y="33" width="5" height="5" />
              <rect x="20" y="33" width="5" height="5" />
              <rect x="33" y="33" width="5" height="5" />
              <rect x="42" y="33" width="5" height="5" />
              <rect x="52" y="33" width="5" height="5" />
              <rect x="62" y="33" width="5" height="5" />
              <rect x="75" y="33" width="5" height="5" />
              <rect x="84" y="33" width="5" height="5" />
              <rect x="94" y="33" width="5" height="5" />

              <rect x="11" y="42" width="5" height="5" />
              <rect x="25" y="42" width="5" height="5" />
              <rect x="38" y="42" width="5" height="5" />
              <rect x="47" y="42" width="5" height="5" />
              <rect x="57" y="42" width="5" height="5" />
              <rect x="71" y="42" width="5" height="5" />
              <rect x="89" y="42" width="5" height="5" />

              <rect x="2" y="52" width="5" height="5" />
              <rect x="16" y="52" width="5" height="5" />
              <rect x="33" y="52" width="5" height="5" />
              <rect x="42" y="52" width="5" height="5" />
              <rect x="52" y="52" width="5" height="5" />
              <rect x="67" y="52" width="5" height="5" />
              <rect x="75" y="52" width="5" height="5" />
              <rect x="84" y="52" width="5" height="5" />
              <rect x="98" y="52" width="5" height="5" />

              <rect x="11" y="62" width="5" height="5" />
              <rect x="20" y="62" width="5" height="5" />
              <rect x="29" y="62" width="5" height="5" />
              <rect x="47" y="62" width="5" height="5" />
              <rect x="57" y="62" width="5" height="5" />
              <rect x="80" y="62" width="5" height="5" />
              <rect x="94" y="62" width="5" height="5" />

              <rect x="33" y="75" width="5" height="5" />
              <rect x="47" y="75" width="5" height="5" />
              <rect x="62" y="75" width="5" height="5" />
              <rect x="75" y="75" width="5" height="5" />
              <rect x="89" y="75" width="5" height="5" />

              <rect x="42" y="84" width="5" height="5" />
              <rect x="52" y="84" width="5" height="5" />
              <rect x="71" y="84" width="5" height="5" />
              <rect x="84" y="84" width="5" height="5" />
              <rect x="98" y="84" width="5" height="5" />

              <rect x="33" y="94" width="5" height="5" />
              <rect x="47" y="94" width="5" height="5" />
              <rect x="62" y="94" width="5" height="5" />
              <rect x="80" y="94" width="5" height="5" />
              <rect x="94" y="94" width="5" height="5" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
