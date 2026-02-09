

## Update Footer Logo

Replace the generic Shield icon in the Footer with the custom `LinfyLogo` component (icon-only mode), matching the Navigation.

### Changes

**File: `src/components/Footer.tsx`**
- Import `LinfyLogo` component
- Remove `Shield` import from lucide-react
- Replace the gradient shield div with `<LinfyLogo iconOnly />` in the logo section

