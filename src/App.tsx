import { ArrowRight, Ellipsis, Upload } from 'lucide-react'
import { type ReactNode, useState } from 'react'
import { Button } from '@/components/ui/button/button'

const primitiveColors = [
  { name: 'ink', value: '#111111', className: 'bg-ink' },
  { name: 'charcoal', value: '#242424', className: 'bg-charcoal' },
  { name: 'slate', value: '#444444', className: 'bg-slate' },
  { name: 'smoke', value: '#979797', className: 'bg-smoke' },
  { name: 'carbon-black', value: '#000000', className: 'bg-carbon-black' },
  { name: 'graphite', value: '#2f2f2f', className: 'bg-graphite' },
  { name: 'ash', value: '#c6c6c6', className: 'bg-ash' },
  { name: 'warm-canvas', value: '#e5e5e5', className: 'bg-warm-canvas' },
  { name: 'mist-gray', value: '#f3f3f3', className: 'bg-mist-gray' },
  { name: 'paper-white', value: '#ffffff', className: 'bg-paper-white' },
  { name: 'mint-chip', value: '#d1ffca', className: 'bg-mint-chip' },
  { name: 'voltage-yellow', value: '#fff100', className: 'bg-voltage-yellow' },
  { name: 'red-700', value: '#b42318', className: 'bg-red-700' },
]

const typeStyles = [
  { token: 'display/section/mobile', className: 'font-display text-display-section-mobile', sample: 'Display' },
  { token: 'heading/panel', className: 'text-heading-panel', sample: 'Heading panel' },
  { token: 'heading/model', className: 'text-heading-model', sample: 'Heading model' },
  { token: 'heading/faq', className: 'text-heading-faq', sample: 'Heading FAQ' },
  { token: 'body/16/leading-150', className: 'text-body-16-leading-150', sample: 'Body — the quick brown fox jumps over the lazy dog.' },
  { token: 'body/14/auto', className: 'text-body-14-auto text-muted-foreground', sample: 'Body 14 — secondary text.' },
  { token: 'label/default', className: 'font-mono text-label-default', sample: 'LABEL / IBM PLEX MONO' },
  { token: 'code/body', className: 'font-mono text-code-body', sample: 'const x = 42' },
]

// DESIGN.md spacing tokens → the default Tailwind utility with the same px value
const spacingScale = [
  { px: 3, className: 'w-0.75' },
  { px: 6, className: 'w-1.5' },
  { px: 8, className: 'w-2' },
  { px: 10, className: 'w-2.5' },
  { px: 12, className: 'w-3' },
  { px: 14, className: 'w-3.5' },
  { px: 16, className: 'w-4' },
  { px: 20, className: 'w-5' },
  { px: 24, className: 'w-6' },
  { px: 32, className: 'w-8' },
  { px: 40, className: 'w-10' },
  { px: 64, className: 'w-16' },
  { px: 80, className: 'w-20' },
  { px: 120, className: 'w-30' },
]

const radii = [
  { token: 'radius/4', className: 'rounded-4' },
  { token: 'radius/8', className: 'rounded-8' },
  { token: 'radius/16', className: 'rounded-16' },
  { token: 'radius/24', className: 'rounded-24' },
  { token: 'radius/32', className: 'rounded-32' },
  { token: 'radius/9999', className: 'rounded-9999' },
]

const buttonVariantNames = ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const

const buttonSizeNames = ['xs', 'sm', 'default', 'lg'] as const

function Section({
  title,
  description,
  children,
}: {
  title: string
  description: string
  children: ReactNode
}) {
  return (
    <section className="rounded-card-default bg-surface-card-light p-card-padding">
      <h2 className="text-heading-card text-reference-text-primary">{title}</h2>
      <p className="mt-2 mb-6 text-body-14-auto text-reference-text-secondary">{description}</p>
      {children}
    </section>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <header className="bg-surface-page text-text-on-dark-primary">
        <div className="mx-auto max-w-6xl px-page-gutter-mobile py-section-padding-y-mobile">
          <span className="inline-flex items-center gap-2 rounded-tag bg-tag-accent-background px-tag-padding-x py-tag-padding-y font-mono text-label-default text-reference-text-primary">
            React + TypeScript + Vite + Tailwind CSS v4
          </span>
          <h1 className="mt-section-content-gap-mobile font-display text-display-section-mobile text-text-on-dark-strong uppercase">
            Component Library Builder
          </h1>
          <p className="mt-4 max-w-2xl text-body-16-leading-150 text-text-on-dark-secondary">
            Demo page for the DESIGN.md tokens:{' '}
            <span className="bg-accent-highlight px-1 text-reference-text-primary">colors</span>, type styles, spacing,
            radius and the Button component.
          </p>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl gap-gap-24 px-page-gutter-mobile py-section-padding-y-mobile lg:grid-cols-2">
        <Section title="Colors" description="Primitive color tokens (bg-ink, bg-mint-chip …).">
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
            {primitiveColors.map((c) => (
              <div key={c.name}>
                <div className={`h-12 rounded-8 border border-border ${c.className}`} />
                <span className="mt-1 block font-mono text-label-micro text-reference-text-secondary">{c.name}</span>
                <span className="block font-mono text-label-micro text-muted-foreground">{c.value}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Typography" description="text-* utilities generated from the DESIGN.md type styles.">
          <div className="space-y-3">
            {typeStyles.map((t) => (
              <div key={t.token}>
                <span className="block font-mono text-label-micro text-muted-foreground">{t.token}</span>
                <p className={t.className}>{t.sample}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Button" description="src/components/ui/button/button.tsx — variants, sizes and icons.">
          <div className="flex flex-wrap items-center gap-3">
            {buttonVariantNames.map((variant) => (
              <Button key={variant} variant={variant}>
                {variant}
              </Button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {buttonSizeNames.map((size) => (
              <Button key={size} variant="outline" size={size}>
                {size}
              </Button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <Button onClick={() => setCount((c) => c + 1)}>Clicked {count} times</Button>
            <Button variant="outline">
              <Upload />
              Upload
            </Button>
            <Button variant="secondary" size="lg">
              Next
              <ArrowRight />
            </Button>
            <Button variant="ghost" size="icon" aria-label="More options">
              <Ellipsis />
            </Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section title="Spacing" description="DESIGN.md spacing tokens (px) on Tailwind's default scale.">
          <div className="space-y-2">
            {spacingScale.map((s) => (
              <div key={s.px} className="flex items-center gap-3">
                <span className="w-10 font-mono text-label-small text-reference-text-secondary">{s.px}px</span>
                <div className={`h-3 rounded-4 bg-data-track ${s.className}`} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Radius" description="rounded-* utilities from the DESIGN.md radius tokens.">
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
            {radii.map((r) => (
              <div key={r.token} className="text-center">
                <div className={`mx-auto size-14 border border-border-on-light bg-surface-panel-light ${r.className}`} />
                <span className="mt-1 block font-mono text-label-micro text-reference-text-secondary">{r.token}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Tags & form" description="Tag tokens and a form control using border/radius tokens.">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-tag bg-tag-accent-background px-tag-padding-x py-tag-padding-y font-mono text-label-default">
              Active
            </span>
            <span className="rounded-tag bg-tag-highlight-background px-tag-padding-x py-tag-padding-y font-mono text-label-default">
              Pending
            </span>
            <span className="rounded-tag bg-action-destructive-background px-tag-padding-x py-tag-padding-y font-mono text-label-default text-reference-text-inverse">
              Failed
            </span>
          </div>
          <label className="mt-6 block text-body-14-auto text-reference-text-primary">
            Email
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 block h-12 w-full rounded-control border border-border bg-surface-card-light px-inset-16 text-body-15-auto placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            />
          </label>
        </Section>
      </main>

      <footer className="py-section-content-gap-mobile text-center font-mono text-label-small text-reference-text-secondary">
        Edit <code>src/App.tsx</code> and save to see HMR in action.
      </footer>
    </div>
  )
}

export default App
