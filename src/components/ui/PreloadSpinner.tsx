export const PreloadSpinner = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <div className="flex items-center justify-center h-screen bg-[#111827] text-white transition-colors duration-300">
            {/* Definición de keyframes inline */}
            <style>{`
        @keyframes eye1 {
          0% { transform: rotate(-260deg) translate(0,-56px); }
          50%,60% { transform: rotate(-40deg) translate(0,-56px) scale(1); animation-timing-function:cubic-bezier(0.17,0,0.58,1); }
          100% { transform: rotate(225deg) translate(0,-56px) scale(0.35); }
        }
        @keyframes eye2 {
          0% { transform: rotate(-260deg) translate(0,-56px); }
          50% { transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1); }
          52.5% { transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1,0); }
          55%,70% { transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1); animation-timing-function:cubic-bezier(0,0,0.28,1); }
          100% { transform: rotate(150deg) translate(0,-56px) scale(0.4); }
        }
        @keyframes mouth1 {
          0% { stroke-dasharray: 0 351.86; stroke-dashoffset: 0; animation-timing-function:ease-in; }
          25% { stroke-dasharray: 175.93 351.86; stroke-dashoffset: 0; animation-timing-function:ease-out; }
          50% { stroke-dasharray: 175.93 351.86; stroke-dashoffset: -175.93; visibility: visible; animation-timing-function:steps(1,start); }
          75%,100% { visibility: hidden; }
        }
        @keyframes mouth2 {
          0% { visibility:hidden; animation-timing-function:steps(1,end); }
          50% { visibility:visible; stroke-dashoffset:0; animation-timing-function:ease-in-out; }
          100% { stroke-dashoffset:-351.86; }
        }
      `}</style>

            <svg
                role="img"
                aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00"
                className="w-32 h-32 fill-white stroke-white text-white"
                viewBox="0 0 128 128"
                {...props}
            >
                <defs>
                    <clipPath id="smiley-eyes">
                        <circle
                            className="origin-[64px_64px] animate-[eye1_3s_ease-in-out_infinite]"
                            cx="64"
                            cy="64"
                            r="8"
                            transform="rotate(-40,64,64) translate(0,-56)"
                        />
                        <circle
                            className="origin-[64px_64px] animate-[eye2_3s_ease-in-out_infinite]"
                            cx="64"
                            cy="64"
                            r="8"
                            transform="rotate(40,64,64) translate(0,-56)"
                        />
                    </clipPath>
                    <linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                    <mask id="smiley-mask">
                        <rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
                    </mask>
                </defs>

                <g strokeLinecap="round" strokeWidth="12" strokeDasharray="175.93 351.86">
                    <g>
                        <rect fill="white" width="128" height="64" clipPath="url(#smiley-eyes)" />
                        <g fill="none" stroke="white">
                            <circle
                                className="animate-[mouth1_3s_infinite]"
                                cx="64"
                                cy="64"
                                r="56"
                                transform="rotate(180,64,64)"
                            />
                            <circle
                                className="animate-[mouth2_3s_infinite]"
                                cx="64"
                                cy="64"
                                r="56"
                                transform="rotate(0,64,64)"
                            />
                        </g>
                    </g>

                    <g mask="url(#smiley-mask)">
                        <rect fill="white" width="128" height="64" clipPath="url(#smiley-eyes)" />
                        <g fill="none" stroke="white">
                            <circle
                                className="animate-[mouth1_3s_infinite]"
                                cx="64"
                                cy="64"
                                r="56"
                                transform="rotate(180,64,64)"
                            />
                            <circle
                                className="animate-[mouth2_3s_infinite]"
                                cx="64"
                                cy="64"
                                r="56"
                                transform="rotate(0,64,64)"
                            />
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}
