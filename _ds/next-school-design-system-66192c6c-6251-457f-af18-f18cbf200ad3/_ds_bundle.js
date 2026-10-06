/* @ds-bundle: {"format":4,"namespace":"NEXTSchoolDesignSystem_66192c","components":[{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"LocationPin","sourcePath":"components/core/LocationPin.jsx"},{"name":"SectionTitle","sourcePath":"components/core/SectionTitle.jsx"},{"name":"Testimonial","sourcePath":"components/core/Testimonial.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"}],"sourceHashes":{"components/core/Accordion.jsx":"8a776d09d485","components/core/Badge.jsx":"b82c04a88d87","components/core/Button.jsx":"a9a28f3b961b","components/core/LocationPin.jsx":"f50b7c5aee4a","components/core/SectionTitle.jsx":"d6dbfe1d98b4","components/core/Testimonial.jsx":"6f2e1428b944","components/forms/Checkbox.jsx":"33c801e54bf9","components/forms/Input.jsx":"755415ba92db","components/forms/Select.jsx":"93529482be16","components/navigation/Navbar.jsx":"d74b1573eccc","components/navigation/SiteFooter.jsx":"ae72d9305476","ui_kits/website/Home.jsx":"5c672198f398"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NEXTSchoolDesignSystem_66192c = window.NEXTSchoolDesignSystem_66192c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Accordion.jsx
try { (() => {
/** Accordion (FAQ-style) — flat, hairline-divided rows with uppercase question. */
function Accordion({
  items,
  defaultOpen = 0
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)'
    }
  }, items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 'var(--space-4)',
        width: '100%',
        padding: 'var(--space-4) 0',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-small)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-caps)',
        color: 'var(--text-heading)',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", null, item.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        lineHeight: 1,
        transition: 'transform var(--duration-base) var(--ease-standard)',
        transform: isOpen ? 'rotate(45deg)' : 'none',
        color: 'var(--color-cyan)',
        fontWeight: 400
      }
    }, "+")), isOpen ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 0 var(--space-5)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-body-size)',
        lineHeight: 'var(--leading-body)',
        color: 'var(--text-body)'
      }
    }, item.content) : null);
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const BADGE_COLORS = {
  yellow: 'var(--color-yellow)',
  cyan: 'var(--color-cyan)',
  purple: 'var(--color-purple)',
  green: 'var(--color-green)',
  red: 'var(--color-red)',
  charcoal: 'var(--color-charcoal)'
};

/** Small uppercase label chip in a flat brand color. */
function Badge({
  color = 'cyan',
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: BADGE_COLORS[color] || color,
      color: color === 'yellow' ? 'var(--color-charcoal)' : 'var(--color-white)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-caption)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      padding: '5px 14px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** NEXT School button — charcoal pill, uppercase label. */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    sm: {
      padding: '10px 24px',
      fontSize: '12px'
    },
    md: {
      padding: '14px 32px',
      fontSize: '13px'
    },
    lg: {
      padding: '17px 44px',
      fontSize: '14px'
    }
  };
  const variants = {
    primary: {
      background: hover ? '#1E2225' : 'var(--color-charcoal)',
      color: 'var(--color-white)',
      border: '2px solid transparent'
    },
    light: {
      background: hover ? 'var(--color-gray-50)' : 'var(--color-white)',
      color: 'var(--color-charcoal)',
      border: '2px solid transparent'
    },
    outline: {
      background: hover ? 'rgba(255,255,255,0.12)' : 'transparent',
      color: 'var(--color-white)',
      border: '2px solid var(--color-white)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      cursor: rest.disabled ? 'not-allowed' : 'pointer',
      opacity: rest.disabled ? 0.45 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard)',
      lineHeight: 1,
      ...sizes[size],
      ...variants[variant]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/LocationPin.jsx
try { (() => {
const PIN_COLORS = {
  cyan: 'var(--color-cyan)',
  purple: 'var(--color-purple)',
  red: 'var(--color-red)',
  green: 'var(--color-green)',
  yellow: 'var(--color-yellow)'
};

/** Colored map-pin glyph + uppercase location label, as used on the Schools/Microschools section. */
function LocationPin({
  color = 'cyan',
  label,
  children
}) {
  const c = PIN_COLORS[color] || color;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "44",
    height: "60",
    viewBox: "0 0 44 60",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 0C9.85 0 0 9.85 0 22c0 15.5 22 38 22 38s22-22.5 22-38C44 9.85 34.15 0 22 0z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "21",
    r: "9",
    fill: "var(--color-white)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-heading)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-heading)'
    }
  }, label), children);
}
Object.assign(__ds_scope, { LocationPin });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LocationPin.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionTitle.jsx
try { (() => {
/** Centered uppercase section title, optionally with lead paragraph. */
function SectionTitle({
  title,
  lead,
  onDark = false,
  align = 'center'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: 760,
      margin: align === 'center' ? '0 auto' : 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h2)',
      fontWeight: 'var(--weight-heading)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 'var(--leading-heading)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)',
      margin: 0
    }
  }, title), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: onDark ? 'rgba(255,255,255,0.85)' : 'var(--text-body)',
      marginTop: 'var(--space-5)',
      marginBottom: 0
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/Testimonial.jsx
try { (() => {
/** Testimonial: large quote, circular B&W portrait, name + credential. Used on color bands. */
function Testimonial({
  quote,
  name,
  credential,
  photo,
  onDark = true
}) {
  const fg = onDark ? 'var(--color-white)' : 'var(--text-heading)';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      textAlign: 'center',
      maxWidth: 820,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.9,
      color: fg,
      margin: 0
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: 110,
      height: 110,
      borderRadius: '50%',
      objectFit: 'cover',
      filter: 'grayscale(1)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 110,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 32,
      color: fg
    }
  }, name.split(' ').map(w => w[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-heading)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      fontSize: 'var(--text-small)',
      color: fg
    }
  }, name), credential ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontStyle: 'italic',
      fontSize: 'var(--text-small)',
      color: onDark ? 'rgba(255,255,255,0.8)' : 'var(--text-muted)'
    }
  }, credential) : null));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with brand-cyan check. */
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  const [internal, setInternal] = React.useState(!!checked);
  const isChecked = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (onChange) onChange(!isChecked);
    if (checked === undefined) setInternal(!isChecked);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-sm)',
      border: isChecked ? '1px solid var(--color-cyan)' : '1px solid var(--border-hairline)',
      background: isChecked ? 'var(--color-cyan)' : 'var(--color-white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, isChecked ? /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "10",
    viewBox: "0 0 12 10",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 5l3.2 3.2L11 1.5",
    stroke: "white",
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-small)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const fieldStyle = focus => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-body-size)',
  color: 'var(--text-heading)',
  background: 'var(--color-white)',
  border: focus ? '1px solid var(--color-cyan)' : '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-sm)',
  padding: '12px 14px',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color var(--duration-fast) var(--ease-standard)'
});
const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-semibold)',
  fontSize: 'var(--text-caption)',
  textTransform: 'uppercase',
  letterSpacing: 'var(--tracking-caps)',
  color: 'var(--text-heading)',
  marginBottom: 'var(--space-2)'
};

/** Form text input with uppercase label — enquiry/admissions forms. */
function Input({
  label,
  multiline = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, label) : null, /*#__PURE__*/React.createElement(Tag, _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldStyle(focus),
      resize: multiline ? 'vertical' : undefined,
      minHeight: multiline ? 110 : undefined
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Select dropdown matching Input styling. */
function Select({
  label,
  options = [],
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-caption)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: 'var(--text-heading)',
      marginBottom: 'var(--space-2)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-size)',
      color: 'var(--text-heading)',
      background: 'var(--color-white)',
      border: focus ? '1px solid var(--color-cyan)' : '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '12px 14px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      appearance: 'auto'
    }
  }, rest), options.map((o, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: typeof o === 'string' ? o : o.value
  }, typeof o === 'string' ? o : o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
const NAV_ITEMS = ['Big Picture', 'About Us', 'Schools', 'Microschools', 'Admissions', 'Careers', 'Contact'];

/** Sticky white site header: logo left, uppercase nav right, search glyph. */
function Navbar({
  items = NAV_ITEMS,
  active,
  onNavigate,
  logoSrc = '../../assets/next-logo-box.png'
}) {
  const [hovered, setHovered] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--color-white)',
      boxShadow: 'var(--shadow-card)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 72,
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "NEXT School",
    style: {
      height: 40,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(item);
    },
    onMouseEnter: () => setHovered(item),
    onMouseLeave: () => setHovered(null),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 'var(--weight-semibold)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-caps)',
      color: item === active || hovered === item ? 'var(--color-cyan)' : 'var(--text-heading)',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, item)), /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    style: {
      cursor: 'pointer'
    },
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "7.5",
    cy: "7.5",
    r: "6",
    fill: "none",
    stroke: "var(--color-charcoal)",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12l5 5",
    stroke: "var(--color-charcoal)",
    strokeWidth: "2",
    strokeLinecap: "round"
  })))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
/** Dark charcoal site footer with contact columns. */
function SiteFooter({
  logoSrc = '../../assets/next-logo-long.png'
}) {
  const h = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-heading)',
    fontSize: 'var(--text-small)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-caps)',
    color: 'var(--color-white)',
    margin: '0 0 var(--space-3)'
  };
  const p = {
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--text-small)',
    lineHeight: 1.8,
    color: 'rgba(255,255,255,0.75)',
    margin: 0
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      padding: 'var(--space-8) 0 var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "NEXT School",
    style: {
      height: 56,
      width: 'auto',
      filter: 'invert(1)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: h
  }, "Address"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "Park Road, Off Devi Dayal Road", /*#__PURE__*/React.createElement("br", null), "Mulund W, Mumbai 400080")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: h
  }, "Email"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "contact@nextschool.org", /*#__PURE__*/React.createElement("br", null), "admissions@nextschool.org")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: h
  }, "Phone"), /*#__PURE__*/React.createElement("p", {
    style: p
  }, "+91 8591103781", /*#__PURE__*/React.createElement("br", null), "[9.00 AM to 5.00 PM]"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.15)',
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-5)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      color: 'rgba(255,255,255,0.5)'
    }
  }, "NEXT is India's 1st Big Picture School. \xA9 R. Z. Shah Trust.")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  SectionTitle,
  LocationPin,
  Testimonial,
  Navbar,
  SiteFooter,
  Input,
  Select,
  Checkbox
} = window.NEXTSchoolDesignSystem_66192c;
const QUOTES = [{
  quote: "Big Picture Learning has redefined — indeed, revolutionized schooling. By bringing students and their interests to the forefront, it is a model of student-centered learning, which is key to intrinsically motivating students",
  name: "Clayton Christensen",
  credential: "Harvard Business School Professor and Author of 'Disrupting Class'"
}, {
  quote: "Big Picture is the 'iPhone' of education to the 'walkman' of old. I'd be proud and eager to send my own kids to a Big Picture school",
  name: "Mark Ecko",
  credential: "Billionaire entrepreneur, fashion designer and philanthropist"
}];
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Hero",
    style: {
      background: 'var(--surface-dark)',
      padding: 'var(--space-9) var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-hero)',
      fontWeight: 'var(--weight-hero)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--text-on-dark)',
      margin: '0 0 var(--space-7)',
      lineHeight: 'var(--leading-heading)'
    }
  }, "Welcome to the Revolution"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      aspectRatio: '16 / 9',
      background: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "70",
    height: "50",
    viewBox: "0 0 70 50",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "70",
    height: "50",
    rx: "10",
    fill: "var(--color-red)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 14l20 11-20 11z",
    fill: "#fff"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: 'var(--text-small)'
    }
  }, "What is Next School? \u2014 5 min video")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 720,
      margin: 'var(--space-6) auto 0',
      color: 'rgba(255,255,255,0.9)',
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body)'
    }
  }, "Watch this 5 minute video to understand Next School's radically different approach to education."));
}
function BigPictureBand() {
  const circle = {
    width: 190,
    height: 190,
    borderRadius: '50%',
    background: 'var(--color-white)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    textTransform: 'uppercase',
    fontSize: 19,
    lineHeight: 1.3,
    color: 'var(--color-charcoal)',
    letterSpacing: '0.02em'
  };
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Big Picture band",
    style: {
      background: 'var(--band-green)',
      padding: 'var(--space-9) var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    onDark: true,
    title: "A radically different approach",
    lead: "NEXT School focuses on discovering each child's passions & interests through authentic, real world projects while offering the IB curriculum alongside."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 36,
      margin: 'var(--space-8) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: circle
  }, "Teacher", /*#__PURE__*/React.createElement("br", null), "Driven"), /*#__PURE__*/React.createElement("svg", {
    width: "90",
    height: "28",
    viewBox: "0 0 90 28",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 14h78M68 4l12 10-12 10",
    stroke: "#fff",
    strokeWidth: "3",
    fill: "none"
  })), /*#__PURE__*/React.createElement("div", {
    style: circle
  }, "Student", /*#__PURE__*/React.createElement("br", null), "Driven")), /*#__PURE__*/React.createElement(Button, {
    variant: "light"
  }, "Learn More About Big Picture"));
}
function TestimonialBand() {
  const [i, setI] = React.useState(0);
  const arrow = dir => ({
    width: 56,
    height: 56,
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.5)',
    background: 'transparent',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  });
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Testimonials",
    style: {
      background: 'var(--band-cyan)',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    "aria-label": "Previous",
    style: arrow(),
    onClick: () => setI((i + QUOTES.length - 1) % QUOTES.length)
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Testimonial, QUOTES[i])), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Next",
    style: arrow(),
    onClick: () => setI((i + 1) % QUOTES.length)
  }, "\u203A")));
}
function SchoolsSection() {
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Schools",
    style: {
      background: 'var(--surface-page)',
      padding: 'var(--space-9) var(--space-5)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Schools"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: 'var(--space-7) 0 var(--space-8)',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(LocationPin, {
    color: "cyan",
    label: "Mulund, Mumbai"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Visit Website"))), /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      borderTop: '1px solid var(--border-hairline)',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Microschools"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'var(--space-9)',
      marginTop: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(LocationPin, {
    color: "purple",
    label: "Lower Parel, Mumbai"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Visit Website")), /*#__PURE__*/React.createElement(LocationPin, {
    color: "red",
    label: "South Goa"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Visit Website"))));
}
function EnquirySection() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Enquiry",
    style: {
      background: 'var(--surface-tint)',
      padding: 'var(--space-9) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    title: "Share your details with us",
    lead: "Someone from our team will be in touch with you soon to schedule a 1-on-1 meeting. We look forward to meeting you."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: 'var(--space-7) auto 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your Name",
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "+91"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Grade applying for",
    options: ['Nursery', 'Jr. KG', 'Sr. KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7']
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "I would like to attend an information session"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setSent(true)
  }, sent ? 'Details Received' : 'Submit'), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--text-small)',
      marginTop: 'var(--space-3)'
    }
  }, "We're not around right now. But you can send us an email and we'll get back to you, asap.") : null)));
}
function Home() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    logoSrc: "../../assets/next-logo-box.png",
    active: "Big Picture"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(BigPictureBand, null), /*#__PURE__*/React.createElement(TestimonialBand, null), /*#__PURE__*/React.createElement(SchoolsSection, null), /*#__PURE__*/React.createElement(EnquirySection, null), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: "../../assets/next-logo-long.png"
  }));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.LocationPin = __ds_scope.LocationPin;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

})();
