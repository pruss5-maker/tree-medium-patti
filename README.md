# KELA — Messages from the Trees

The first website for Tree Medium Patti and the Kela Tree Message service.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

Working oracle previews:

- Spirit Animal: `http://localhost:4173/animal-guide.html`
- Tree Oracle: `http://localhost:4173/tree-oracle.html`

On localhost, each oracle includes a preview control for cycling through the full working deck.
The Tree Oracle also accepts `?tree=0` through `?tree=11` for reviewing a specific card without
changing the visitor's saved daily draw.

## Publish on Vercel

This is a dependency-free static website. Connect its GitHub repository to Vercel and deploy with
no build command. The output directory is the project root (`.`).

## Before public launch

- Verify the live Stripe payment link redirects to Calendly after successful payment.
- Add the final domain.
- Add the final public Booking Terms and Privacy Notice URLs to Stripe, and require Stripe's terms
  consent checkbox.
- Test the complete booking flow on mobile and desktop.

The website now has one booking button. It opens an affirmative consent gate containing the
confirmed 24-hour cancellation/no-refund policy, private-recording conditions, and privacy summary
before the customer can continue to Stripe. Permanent versions are available in `terms.html` and
`privacy.html`.

## Current confirmed offer

`Your Tree Message` is $149 and includes a locally selected tree visit, Patti's prepared message, a
tree photograph when conditions allow, and a private 45-minute live video conversation.

The generated woodland hero image is an original draft asset created for this project. Replace it
with Patti's photography if a future reference better represents the practice.

The Patti portrait and tree-visit photograph are optimized website copies made from the supplied
image references. Their embedded metadata was removed; the original files remain untouched.

Public contact email: `treemedium@proton.me`.
