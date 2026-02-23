# MONARC Development Workflow

> **Strict rules for all development work**

## Before Starting Any Task

### 1. Check TODO.md
- Find the task in `docs/TODO.md`
- If task doesn't exist, add it first with priority level
- Never work on something not in TODO.md

### 2. Check If Already Implemented
- Read `docs/ARCHITECTURE.md` for existing patterns
- Search codebase: `grep -r "feature_name" src/`
- Check git history: `git log --oneline --grep="feature"`
- **Do NOT duplicate existing work**

### 3. Understand Context
- Read `docs/JOURNAL.md` for recent decisions
- Check `docs/DESIGN-SYSTEM.md` for styling patterns
- Review related code in the area you'll modify

---

## Implementation Process

### Step 1: Plan
- Write implementation plan in sub-agent task
- Identify files to modify
- List dependencies

### Step 2: Implement
- Make focused, atomic changes
- Follow existing code patterns
- Use TypeScript strictly (no `any`)

### Step 3: Lint
```bash
npm run lint        # Must pass with 0 errors
npm run lint:fix    # Auto-fix what's possible
```

### Step 4: Test
```bash
npm run build       # Must complete without errors
npm run test        # If tests exist, must pass
```

### Step 5: Verify Locally
- Start dev server: `npm run dev`
- Manual E2E verification
- Check browser console for errors
- Test on different screen sizes

### Step 6: Commit
```bash
# Format: type(scope): description
git add .
git commit -m "feat(component): add new feature"
```

**Commit types:**
- `wip:` — incomplete, do not deploy
- `draft:` — compiles but untested
- `feat:` — new feature, tested
- `fix:` — bug fix, tested
- `style:` — styling only
- `refactor:` — code restructure
- `docs:` — documentation
- `test:` — adding tests

### Step 7: Push & Deploy
```bash
git push origin main
# CI/CD auto-deploys to devopsplusservice.com
```

### Step 8: Verify Production
- Check https://devopsplusservice.com/dashboard
- Verify feature works in production
- Check for console errors
- Test critical user flows

---

## After Completion

### Update TODO.md
- Mark task as `[x]` completed
- Update progress percentages
- Add any new discovered tasks

### Update JOURNAL.md
- Document what was done
- Note any issues encountered
- Record decisions made
- Include commit hashes

### Update ARCHITECTURE.md (if applicable)
- New components added
- New patterns introduced
- API changes

### Update Memory (if significant)
- Major decisions
- Lessons learned
- Context for future sessions

---

## Sub-Agent Rules

When spawning sub-agents:

1. **Task must be specific** — clear deliverable
2. **Must verify E2E** — not just "it compiles"
3. **Must report**:
   - Files modified
   - Lint status
   - Test status
   - Verification steps taken
   - Any issues found
4. **On failure** — report why, don't leave broken code

---

## Forbidden Actions

❌ Push code that doesn't lint
❌ Push code that doesn't build
❌ Work on features not in TODO.md
❌ Skip verification step
❌ Forget to journal
❌ Duplicate existing functionality

---

*Last updated: 2026-02-23*
