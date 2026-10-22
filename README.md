# Asad Javed — Portfolio Website

Complete static website source. No installation, framework, build command, database, API key, or backend is required.

## Preview

Extract the ZIP and open index.html in a modern browser. For a local HTTP preview, run `python -m http.server 8000` in the extracted folder, then visit http://localhost:8000.

## Upload to a web host

1. Extract the ZIP.
2. Upload index.html, style.css, app.js, content.js, and favicon.svg together to your host's web root or static-site publish directory. Keep their relative locations unchanged; index.html must be at the top level of that directory.
3. For hosts that accept a ZIP or folder upload, select this archive or the extracted folder as appropriate. For repository-based hosting, put these files at the repository root. Select static hosting with no build command and the repository root as the publish directory.
4. Visit the HTTPS website address supplied by your host. Test project dialogs, both themes, email, and LinkedIn links there.

The local address 127.0.0.1 is only a preview on your computer. Your host supplies the lasting online address; availability depends on the hosting service. Nothing has been published automatically.

## Edit content

- content.js: CGPA, projects, experience, learning entries, and skills. The CGPA value updates both displayed locations.
- index.html: introduction, education history, contact copy, navigation, and page metadata.
- style.css: layout, responsive rules, liquid glass, cursor, and animations.
- app.js: content rendering, theme storage, project dialogs, scroll reveals, and cursor interactions.
- favicon.svg: browser icon.

Set a project's year only when known. The robotic arm's vision guidance is marked as in progress. All project artwork is a concept illustration rather than a project photo.

## Behavior and portability

Dark is the initial theme; later choices are stored in the visitor's browser. Motion effects respect reduced-motion preferences. The custom cursor is for supported mouse devices; touch uses normal behavior. Native dialogs retain the standard cursor.

Email buttons open the visitor's email application. LinkedIn links open the profile in a new tab; there is no account connection or automatic sync. There is no contact-form backend to configure.

Google Fonts is an optional external styling resource. If unavailable, the site uses local fallback fonts; website code and illustrations are included in this archive. Use a current browser for backdrop blur and native dialogs. All asset paths are relative, so the site can also be hosted in a subdirectory.

## Adding the published address to LinkedIn

After hosting, add the host's HTTPS address as a website in your LinkedIn profile's Contact Info. You can also add it as a link in the Featured section. Profile editing controls may vary.
