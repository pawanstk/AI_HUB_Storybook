import { createCn } from 'cn/config'

// Teach cn the DESIGN.md scales from src/index.css; otherwise it reads
// text-button-label as a color and drops it next to text-primary-foreground.
// Regenerate these lists whenever the tokens in src/index.css change.
const text = [
    'body-13-auto', 'body-14-auto', 'body-14-leading-150', 'body-15-auto',
    'body-15-medium', 'body-16-auto', 'body-16-auto-mobile', 'body-16-leading-150',
    'body-compact', 'body-small', 'brand-wordmark', 'button-label', 'code-body',
    'code-body-mobile', 'display-brand', 'display-brand-mobile', 'display-hero',
    'display-hero-mobile', 'display-price', 'display-section',
    'display-section-mobile', 'documentation-body', 'heading-card', 'heading-faq',
    'heading-faq-mobile', 'heading-model', 'heading-model-preview', 'heading-panel',
    'heading-panel-mobile', 'label-compact', 'label-default', 'label-diagram',
    'label-micro', 'label-multiline', 'label-small', 'label-small-mobile',
    'navigation-item', 'reference-body', 'reference-body-sm', 'reference-caption',
    'reference-display', 'reference-display-xl', 'reference-heading',
    'reference-heading-compact', 'reference-heading-lg', 'reference-heading-sm',
    'reference-subheading', 'reference-subheading-lg', 'symbol-16', 'symbol-18',
    'symbol-20', 'symbol-22', 'symbol-model',
]

const spacing = [
    'button-focus-ring', 'button-gap', 'button-lg-padding-y', 'button-padding-x',
    'button-padding-y', 'card-padding', 'gap-10', 'gap-12', 'gap-16', 'gap-20',
    'gap-24', 'gap-28', 'gap-3', 'gap-32', 'gap-40', 'gap-6', 'gap-64', 'gap-8',
    'gap-80', 'inset-12', 'inset-14', 'inset-16', 'inset-20', 'inset-32', 'inset-40',
    'inset-8', 'navigation-padding-x', 'navigation-padding-x-mobile',
    'navigation-padding-y', 'none', 'page-gutter', 'page-gutter-mobile',
    'reference-base-unit', 'reference-button-padding-x', 'reference-button-padding-y',
    'reference-card-padding', 'reference-element-gap-max', 'reference-element-gap-min',
    'reference-scale-96', 'reference-section-gap', 'reference-tag-padding-x',
    'reference-tag-padding-y', 'section-content-gap', 'section-content-gap-mobile',
    'section-padding-y', 'section-padding-y-mobile', 'tag-padding-x', 'tag-padding-y',
]

const radius = [
    '0', '12', '16', '20', '24', '32', '4', '48', '64', '8', '9999', 'button',
    'button-focus-ring', 'card-default', 'card-large', 'control', 'data-bar',
    'navigation', 'none', 'panel', 'reference-button-compact',
    'reference-button-default', 'reference-card-default', 'reference-card-large',
    'reference-full', 'reference-large-card', 'reference-nav-pill',
    'reference-scale-12', 'reference-scale-20', 'reference-tag', 'section-top-arc',
    'section-top-arc-mobile', 'tag',
]

export const cn = createCn({ extend: { theme: { text, spacing, radius } } })
