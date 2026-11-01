# Proposal

A minimal single-page proposal built with Next.js App Router and React.

## Run

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000.

## Customize

The question and success message are in `app/proposal.tsx`. The supplied React Bits Iridescence component is in `app/Iridescence.jsx`, with its styles in `app/Iridescence.css`. The rose palette is paired with subtle outlined hearts; the speed is reduced to 0.35. Typography uses local system fonts.

Each No click multiplies Yes by 1.55 without a viewport cap. No remains reachable and moves into the corner after four clicks. Yes reveals confetti with a replay option. Reduced motion freezes the background and uses static confetti. A solid rose background remains available when WebGL is unavailable.

Answers stay in the browser and reset on refresh. They are not sent anywhere.

## Build

```sh
npm run typecheck
npm run build
```

The static export is written to `out/`. Sites hosting is configured in `.openai/hosting.json`. The hosted preview is private to its owner; sharing access must change before another person can visit it.


