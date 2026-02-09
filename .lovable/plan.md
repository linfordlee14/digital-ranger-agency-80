

## Add Founder Photo to About Section

Replace the "LM" initials placeholder in the About section with the uploaded founder photo.

### Changes

**Copy file:**
- Copy `user-uploads://founder.jpg` to `src/assets/founder.jpg`

**File: `src/components/AboutSection.tsx`**
- Import the founder image: `import founderImg from '@/assets/founder.jpg'`
- Replace the initials div (line 62-64) with an `<img>` tag using the imported image, styled with `rounded-2xl`, `object-cover`, and matching the existing `w-20 h-20` dimensions plus the border styling

