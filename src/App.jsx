import { useEffect, useState } from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
import { ChartColumn, ArrowUpRight, BookOpen, BriefcaseBusiness, Download, Heart, Instagram, Menu, Play, X } from "lucide-react";
import "./App.css";

const _jsxFileName = "App.js";

const instagram = "https://www.instagram.com/careerbeyond_degree/";
const portraitUrl = "/portrait.jpeg";
const reels = ["DXRjngdD3Uo", "DbYITFJogw_", "DaiDj4wSQMY", "DYmrzuvPSGT", "DYM4YmTTDZb", "DWbq1Vrj7ju", "DbPh1NmIJcK"].map(id => `https://www.instagram.com/reel/${id}/`);
const collabs = [["Academically Global", "https://www.instagram.com/reel/DXg7QdrDx2X/"], ["LearnTube.ai", "https://www.instagram.com/reel/DZkPbIlPfx8/"], ["Upsurge Infotech", "https://www.instagram.com/reel/DbvUq-gIHMz/"], ["Academically Global", "https://www.instagram.com/reel/DcBUWrRo6G9/"], ["Powersutra", "https://www.instagram.com/reel/DUDrJ46kguU/"]];
const Stat = ({
  value,
  label,
  dark = false
}) => /*#__PURE__*/jsxDEV("div", {
  className: `stat ${dark ? "stat-dark" : ""}`,
  "data-testid": `stat-${label.toLowerCase().replaceAll(" ", "-")}`,
  "x-file-name": "App",
  "x-line-number": "17",
  "x-column": "49",
  "x-component": "div",
  "x-id": "App_17_49",
  "x-dynamic": "false",
  children: [/*#__PURE__*/jsxDEV("strong", {
    "x-file-name": "App",
    "x-line-number": "17",
    "x-column": "165",
    "x-component": "strong",
    "x-id": "App_17_165",
    "x-dynamic": "true",
    "x-source-type": "prop",
    "x-source-var": "value",
    "x-source-editable": "false",
    children: value
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 166
  }, undefined), /*#__PURE__*/jsxDEV("span", {
    "x-file-name": "App",
    "x-line-number": "17",
    "x-column": "189",
    "x-component": "span",
    "x-id": "App_17_189",
    "x-dynamic": "true",
    "x-source-type": "prop",
    "x-source-var": "label",
    "x-source-editable": "false",
    children: label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 190
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 17,
  columnNumber: 50
}, undefined);
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    email: "",
    message: ""
  });
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")), {
      threshold: 0.12
    });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  const submitEnquiry = event => {
    event.preventDefault();
    const {
      name,
      brand,
      email,
      message
    } = formValues;
    const subject = encodeURIComponent(`Collaboration enquiry from ${brand || name}`);
    const body = encodeURIComponent(`Name: ${name}\nBrand: ${brand}\nEmail: ${email}\n\nCampaign / Message:\n${message}`);
    window.location.href = `mailto:sakshi.jaiswal.info@gmail.com?subject=${subject}&body=${body}`;
  };
  return /*#__PURE__*/jsxDEV("div", {
    className: "site-shell",
    "x-file-name": "App",
    "x-line-number": "36",
    "x-column": "9",
    "x-component": "div",
    "x-id": "App_36_9",
    "x-dynamic": "false",
    children: [/*#__PURE__*/jsxDEV("header", {
      className: "site-nav",
      "data-testid": "site-navigation",
      "x-file-name": "App",
      "x-line-number": "37",
      "x-column": "4",
      "x-component": "header",
      "x-id": "App_37_4",
      "x-dynamic": "false",
      children: [/*#__PURE__*/jsxDEV("a", {
        className: "brand-mark",
        href: "#home",
        "data-testid": "brand-home-link",
        "x-file-name": "App",
        "x-line-number": "38",
        "x-column": "6",
        "x-component": "a",
        "x-id": "App_38_6",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("span", {
          "x-file-name": "App",
          "x-line-number": "38",
          "x-column": "75",
          "x-component": "span",
          "x-id": "App_38_75",
          "x-dynamic": "false",
          children: "SJ"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 76
        }, this), /*#__PURE__*/jsxDEV("strong", {
          "x-file-name": "App",
          "x-line-number": "38",
          "x-column": "90",
          "x-component": "strong",
          "x-id": "App_38_90",
          "x-dynamic": "false",
          children: "Sakshi Jaiswal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 91
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("nav", {
        className: menuOpen ? "nav-links nav-open" : "nav-links",
        "data-testid": "main-navigation",
        "x-file-name": "App",
        "x-line-number": "39",
        "x-column": "6",
        "x-component": "nav",
        "x-id": "App_39_6",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: [["About", "Content", "Work With Me", "Contact"].map(item => /*#__PURE__*/jsxDEV("a", {
          href: `#${item === "Work With Me" ? "work" : item.toLowerCase()}`,
          onClick: closeMenu,
          "data-testid": `nav-${item.toLowerCase().replaceAll(" ", "-")}-link`,
          "x-file-name": "App",
          "x-line-number": "40",
          "x-column": "71",
          "x-component": "a",
          "x-id": "App_40_71",
          "x-dynamic": "true",
          "x-source-type": "static-local",
          "x-source-file": "/app/frontend/src/App.js",
          "x-source-file-abs": "/app/frontend/src/App.js",
          "x-source-line": "40",
          "x-source-editable": "true",
          "x-array-file": "/app/frontend/src/App.js",
          "x-array-line": "40",
          "x-array-item-param": "item",
          "x-array-inline": "true",
          children: item
        }, item, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 72
        }, this)), /*#__PURE__*/jsxDEV("a", {
          className: "nav-instagram",
          href: instagram,
          target: "_blank",
          rel: "noreferrer",
          "aria-label": "Open Instagram",
          "data-testid": "nav-instagram-link",
          "x-file-name": "App",
          "x-line-number": "41",
          "x-column": "8",
          "x-component": "a",
          "x-id": "App_41_8",
          "x-dynamic": "false",
          children: /*#__PURE__*/jsxDEV(Instagram, {
            size: 17,
            "x-file-name": "App",
            "x-line-number": "41",
            "x-column": "148",
            "x-component": "Instagram",
            "x-id": "App_41_148",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 149
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("a", {
        className: "nav-cta",
        href: "/MEDIA_KIT.pdf",
        "data-testid": "nav-media-kit-link",
        "x-file-name": "App",
        "x-line-number": "43",
        "x-column": "6",
        "x-component": "a",
        "x-id": "App_43_6",
        "x-dynamic": "false",
        children: ["Media Kit ", /*#__PURE__*/jsxDEV(ArrowUpRight, {
          size: 16,
          "x-file-name": "App",
          "x-line-number": "43",
          "x-column": "94",
          "x-component": "ArrowUpRight",
          "x-id": "App_43_94",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 95
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("button", {
        className: "menu-button",
        onClick: () => setMenuOpen(!menuOpen),
        "aria-label": "Toggle navigation",
        "data-testid": "mobile-menu-button",
        "x-file-name": "App",
        "x-line-number": "44",
        "x-column": "6",
        "x-component": "button",
        "x-id": "App_44_6",
        "x-dynamic": "true",
        "x-source-type": "computed",
        "x-source-editable": "false",
        children: menuOpen ? /*#__PURE__*/jsxDEV(X, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 154
        }, this) : /*#__PURE__*/jsxDEV(Menu, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 162
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }, this), /*#__PURE__*/jsxDEV("main", {
      "x-file-name": "App",
      "x-line-number": "47",
      "x-column": "4",
      "x-component": "main",
      "x-id": "App_47_4",
      "x-dynamic": "false",
      children: [/*#__PURE__*/jsxDEV("section", {
        className: "hero section-wrap",
        id: "home",
        "data-testid": "hero-section",
        "x-file-name": "App",
        "x-line-number": "48",
        "x-column": "6",
        "x-component": "section",
        "x-id": "App_48_6",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("div", {
          className: "hero-copy reveal",
          "x-file-name": "App",
          "x-line-number": "49",
          "x-column": "8",
          "x-component": "div",
          "x-id": "App_49_8",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("div", {
            className: "eyebrow",
            "x-file-name": "App",
            "x-line-number": "49",
            "x-column": "42",
            "x-component": "div",
            "x-id": "App_49_42",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("span", {
              className: "eyebrow-dot",
              "x-file-name": "App",
              "x-line-number": "49",
              "x-column": "67",
              "x-component": "span",
              "x-id": "App_49_67",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 68
            }, this), " CAREER & TECH CREATOR"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 43
          }, this), /*#__PURE__*/jsxDEV("h1", {
            "x-file-name": "App",
            "x-line-number": "49",
            "x-column": "127",
            "x-component": "h1",
            "x-id": "App_49_127",
            "x-dynamic": "false",
            children: ["Career, Tech", /*#__PURE__*/jsxDEV("br", {
              "x-file-name": "App",
              "x-line-number": "49",
              "x-column": "143",
              "x-component": "br",
              "x-id": "App_49_143",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 144
            }, this), /*#__PURE__*/jsxDEV("em", {
              "x-file-name": "App",
              "x-line-number": "49",
              "x-column": "149",
              "x-component": "em",
              "x-id": "App_49_149",
              "x-dynamic": "false",
              children: "& Real Talk"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 150
            }, this), " \u2014", /*#__PURE__*/jsxDEV("br", {
              "x-file-name": "App",
              "x-line-number": "49",
              "x-column": "171",
              "x-component": "br",
              "x-id": "App_49_171",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 172
            }, this), "Made Simple."]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 128
          }, this), /*#__PURE__*/jsxDEV("p", {
            className: "hero-intro",
            "x-file-name": "App",
            "x-line-number": "49",
            "x-column": "194",
            "x-component": "p",
            "x-id": "App_49_194",
            "x-dynamic": "false",
            children: "Helping young professionals and non-tech graduates navigate careers, upskilling and technology through relatable, practical content."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 195
          }, this), /*#__PURE__*/jsxDEV("div", {
            className: "hero-actions",
            "x-file-name": "App",
            "x-line-number": "49",
            "x-column": "356",
            "x-component": "div",
            "x-id": "App_49_356",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("a", {
              className: "button button-primary",
              href: "#work",
              "data-testid": "hero-work-with-me-button",
              "x-file-name": "App",
              "x-line-number": "49",
              "x-column": "386",
              "x-component": "a",
              "x-id": "App_49_386",
              "x-dynamic": "false",
              children: ["Work With Me ", /*#__PURE__*/jsxDEV(ArrowUpRight, {
                size: 18,
                "x-file-name": "App",
                "x-line-number": "49",
                "x-column": "488",
                "x-component": "ArrowUpRight",
                "x-id": "App_49_488",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 489
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 387
            }, this), /*#__PURE__*/jsxDEV("a", {
              className: "text-link",
              href: instagram,
              target: "_blank",
              rel: "noreferrer",
              "data-testid": "hero-instagram-link",
              "x-file-name": "App",
              "x-line-number": "49",
              "x-column": "518",
              "x-component": "a",
              "x-id": "App_49_518",
              "x-dynamic": "false",
              children: ["View Instagram ", /*#__PURE__*/jsxDEV(ArrowUpRight, {
                size: 16,
                "x-file-name": "App",
                "x-line-number": "49",
                "x-column": "642",
                "x-component": "ArrowUpRight",
                "x-id": "App_49_642",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 643
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 519
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 357
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this), /*#__PURE__*/jsxDEV("div", {
          className: "hero-side reveal",
          "x-file-name": "App",
          "x-line-number": "50",
          "x-column": "8",
          "x-component": "div",
          "x-id": "App_50_8",
          "x-dynamic": "false",
          children: /*#__PURE__*/jsxDEV("div", {
            className: "portrait-card portrait-card-image",
            "data-testid": "hero-portrait",
            "x-file-name": "App",
            "x-line-number": "50",
            "x-column": "42",
            "x-component": "div",
            "x-id": "App_50_42",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("img", {
              src: portraitUrl,
              alt: "Sakshi Jaiswal, Career and Tech Creator",
              "x-file-name": "App",
              "x-line-number": "50",
              "x-column": "121",
              "x-component": "img",
              "x-id": "App_50_121",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 122
            }, this), /*#__PURE__*/jsxDEV("div", {
              className: "portrait-caption",
              "x-file-name": "App",
              "x-line-number": "50",
              "x-column": "192",
              "x-component": "div",
              "x-id": "App_50_192",
              "x-dynamic": "false",
              children: /*#__PURE__*/jsxDEV("span", {
                "x-file-name": "App",
                "x-line-number": "50",
                "x-column": "226",
                "x-component": "span",
                "x-id": "App_50_226",
                "x-dynamic": "false",
                children: ["SAKSHI JAISWAL", /*#__PURE__*/jsxDEV("br", {
                  "x-file-name": "App",
                  "x-line-number": "50",
                  "x-column": "246",
                  "x-component": "br",
                  "x-id": "App_50_246",
                  "x-dynamic": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 247
                }, this), "CAREER & TECH CREATOR"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 227
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 193
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 43
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, this), /*#__PURE__*/jsxDEV("div", {
          className: "hero-stats reveal",
          "x-file-name": "App",
          "x-line-number": "51",
          "x-column": "8",
          "x-component": "div",
          "x-id": "App_51_8",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV(Stat, {
            value: "36K+",
            label: "Instagram Followers",
            "x-file-name": "App",
            "x-line-number": "51",
            "x-column": "43",
            "x-component": "Stat",
            "x-id": "App_51_43",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 44
          }, this), /*#__PURE__*/jsxDEV(Stat, {
            value: "1.2M+",
            label: "Reel Views",
            "x-file-name": "App",
            "x-line-number": "51",
            "x-column": "92",
            "x-component": "Stat",
            "x-id": "App_51_92",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 93
          }, this), /*#__PURE__*/jsxDEV(Stat, {
            value: "96K+",
            label: "Content Interactions",
            "x-file-name": "App",
            "x-line-number": "51",
            "x-column": "133",
            "x-component": "Stat",
            "x-id": "App_51_133",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 134
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("section", {
        className: "about section-wrap section-grid reveal",
        id: "about",
        "data-testid": "about-section",
        "x-file-name": "App",
        "x-line-number": "54",
        "x-column": "6",
        "x-component": "section",
        "x-id": "App_54_6",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("div", {
          className: "section-label",
          "x-file-name": "App",
          "x-line-number": "54",
          "x-column": "105",
          "x-component": "div",
          "x-id": "App_54_105",
          "x-dynamic": "false",
          children: "02 / ABOUT ME"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 106
        }, this), /*#__PURE__*/jsxDEV("div", {
          "x-file-name": "App",
          "x-line-number": "54",
          "x-column": "155",
          "x-component": "div",
          "x-id": "App_54_155",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("h2", {
            "x-file-name": "App",
            "x-line-number": "54",
            "x-column": "160",
            "x-component": "h2",
            "x-id": "App_54_160",
            "x-dynamic": "false",
            children: ["A practical voice for", /*#__PURE__*/jsxDEV("br", {
              "x-file-name": "App",
              "x-line-number": "54",
              "x-column": "185",
              "x-component": "br",
              "x-id": "App_54_185",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 186
            }, this), /*#__PURE__*/jsxDEV("span", {
              "x-file-name": "App",
              "x-line-number": "54",
              "x-column": "191",
              "x-component": "span",
              "x-id": "App_54_191",
              "x-dynamic": "false",
              children: "what comes next."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 192
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 161
          }, this), /*#__PURE__*/jsxDEV("div", {
            className: "about-text",
            "x-file-name": "App",
            "x-line-number": "54",
            "x-column": "225",
            "x-component": "div",
            "x-id": "App_54_225",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("p", {
              "x-file-name": "App",
              "x-line-number": "54",
              "x-column": "253",
              "x-component": "p",
              "x-id": "App_54_253",
              "x-dynamic": "false",
              children: "I\u2019m Sakshi Jaiswal, a career & tech creator helping young professionals and non-tech graduates navigate careers, upskilling and technology through relatable, practical content."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 254
            }, this), /*#__PURE__*/jsxDEV("p", {
              "x-file-name": "App",
              "x-line-number": "54",
              "x-column": "436",
              "x-component": "p",
              "x-id": "App_54_436",
              "x-dynamic": "false",
              children: "My journey from Pharm.D to data analytics shaped the way I create content today \u2014 breaking down career decisions, technology and learning into practical, relatable conversations."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 437
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 226
          }, this), /*#__PURE__*/jsxDEV("a", {
            className: "text-link",
            href: instagram,
            target: "_blank",
            rel: "noreferrer",
            "data-testid": "about-instagram-link",
            "x-file-name": "App",
            "x-line-number": "54",
            "x-column": "627",
            "x-component": "a",
            "x-id": "App_54_627",
            "x-dynamic": "false",
            children: ["Follow the journey ", /*#__PURE__*/jsxDEV(ArrowUpRight, {
              size: 16,
              "x-file-name": "App",
              "x-line-number": "54",
              "x-column": "756",
              "x-component": "ArrowUpRight",
              "x-id": "App_54_756",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 757
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 628
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 156
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("section", {
        className: "content-section section-wrap",
        id: "content",
        "data-testid": "content-section",
        "x-file-name": "App",
        "x-line-number": "56",
        "x-column": "6",
        "x-component": "section",
        "x-id": "App_56_6",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("div", {
          className: "section-heading reveal",
          "x-file-name": "App",
          "x-line-number": "56",
          "x-column": "99",
          "x-component": "div",
          "x-id": "App_56_99",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("div", {
            className: "section-label",
            "x-file-name": "App",
            "x-line-number": "56",
            "x-column": "139",
            "x-component": "div",
            "x-id": "App_56_139",
            "x-dynamic": "false",
            children: "03 / THE CONTENT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 140
          }, this), /*#__PURE__*/jsxDEV("div", {
            "x-file-name": "App",
            "x-line-number": "56",
            "x-column": "192",
            "x-component": "div",
            "x-id": "App_56_192",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("h2", {
              "x-file-name": "App",
              "x-line-number": "56",
              "x-column": "197",
              "x-component": "h2",
              "x-id": "App_56_197",
              "x-dynamic": "false",
              children: "What I Create"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 198
            }, this), /*#__PURE__*/jsxDEV("p", {
              "x-file-name": "App",
              "x-line-number": "56",
              "x-column": "219",
              "x-component": "p",
              "x-id": "App_56_219",
              "x-dynamic": "false",
              children: ["Useful ideas for people building a career", /*#__PURE__*/jsxDEV("br", {
                className: "desktop-only",
                "x-file-name": "App",
                "x-line-number": "56",
                "x-column": "263",
                "x-component": "br",
                "x-id": "App_56_263",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 264
              }, this), " that feels like their own."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 220
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 193
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 100
        }, this), /*#__PURE__*/jsxDEV("div", {
          className: "create-grid",
          "x-file-name": "App",
          "x-line-number": "56",
          "x-column": "337",
          "x-component": "div",
          "x-id": "App_56_337",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: [[BriefcaseBusiness, "Career & Jobs", "Career decisions, job search, workplace lessons and professional growth."], [ChartColumn, "Data, Tech & AI", "Data analytics, technology, AI tools and the changing world of work."], [BookOpen, "Upskilling & Education", "Learning strategies, courses, skills and career transitions."], [Heart, "Life & Career Lessons", "Real experiences, college lessons, career mistakes and relatable perspectives."]].map(([Icon, title, copy], index) => /*#__PURE__*/jsxDEV("article", {
            className: `create-card reveal card-${index + 1}`,
            "data-testid": `content-card-${index + 1}`,
            "x-file-name": "App",
            "x-line-number": "56",
            "x-column": "840",
            "x-component": "article",
            "x-id": "App_56_840",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("div", {
              className: "card-top",
              "x-file-name": "App",
              "x-line-number": "56",
              "x-column": "954",
              "x-component": "div",
              "x-id": "App_56_954",
              "x-dynamic": "false",
              children: [/*#__PURE__*/jsxDEV("span", {
                "x-file-name": "App",
                "x-line-number": "56",
                "x-column": "980",
                "x-component": "span",
                "x-id": "App_56_980",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: ["0", /*#__PURE__*/jsxDEV("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "App",
                  "x-line-number": "56",
                  "x-column": "980",
                  "x-component": "span",
                  "x-id": "App_56_980_expr1",
                  "x-dynamic": "true",
                  "x-source-type": "computed",
                  "x-source-editable": "false",
                  children: index + 1
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 981
              }, this), /*#__PURE__*/jsxDEV(Icon, {
                size: 22,
                strokeWidth: 1.7,
                "x-file-name": "App",
                "x-line-number": "56",
                "x-column": "1005",
                "x-component": "Icon",
                "x-id": "App_56_1005",
                "x-dynamic": "true"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 1006
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 955
            }, this), /*#__PURE__*/jsxDEV("h3", {
              "x-file-name": "App",
              "x-line-number": "56",
              "x-column": "1047",
              "x-component": "h3",
              "x-id": "App_56_1047",
              "x-dynamic": "true",
              "x-source-type": "unknown",
              "x-source-var": "title",
              "x-source-editable": "false",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 1048
            }, this), /*#__PURE__*/jsxDEV("p", {
              "x-file-name": "App",
              "x-line-number": "56",
              "x-column": "1063",
              "x-component": "p",
              "x-id": "App_56_1063",
              "x-dynamic": "true",
              "x-source-type": "unknown",
              "x-source-var": "copy",
              "x-source-editable": "false",
              children: copy
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 1064
            }, this), /*#__PURE__*/jsxDEV(ArrowUpRight, {
              className: "card-arrow",
              size: 19,
              "x-file-name": "App",
              "x-line-number": "56",
              "x-column": "1076",
              "x-component": "ArrowUpRight",
              "x-id": "App_56_1076",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 1077
            }, this)]
          }, title, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 841
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 338
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("section", {
        className: "audience-section section-wrap reveal",
        "data-testid": "audience-section",
        "x-file-name": "App",
        "x-line-number": "58",
        "x-column": "6",
        "x-component": "section",
        "x-id": "App_58_6",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("div", {
          className: "section-label",
          "x-file-name": "App",
          "x-line-number": "58",
          "x-column": "95",
          "x-component": "div",
          "x-id": "App_58_95",
          "x-dynamic": "false",
          children: "04 / THE AUDIENCE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 96
        }, this), /*#__PURE__*/jsxDEV("div", {
          className: "audience-content",
          "x-file-name": "App",
          "x-line-number": "58",
          "x-column": "149",
          "x-component": "div",
          "x-id": "App_58_149",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("h2", {
            "x-file-name": "App",
            "x-line-number": "58",
            "x-column": "183",
            "x-component": "h2",
            "x-id": "App_58_183",
            "x-dynamic": "false",
            children: ["An audience that\u2019s", /*#__PURE__*/jsxDEV("br", {
              "x-file-name": "App",
              "x-line-number": "58",
              "x-column": "205",
              "x-component": "br",
              "x-id": "App_58_205",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 206
            }, this), /*#__PURE__*/jsxDEV("span", {
              "x-file-name": "App",
              "x-line-number": "58",
              "x-column": "211",
              "x-component": "span",
              "x-id": "App_58_211",
              "x-dynamic": "false",
              children: "building their next chapter."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 212
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 184
          }, this), /*#__PURE__*/jsxDEV("p", {
            "x-file-name": "App",
            "x-line-number": "58",
            "x-column": "257",
            "x-component": "p",
            "x-id": "App_58_257",
            "x-dynamic": "false",
            children: "My content reaches a young, digitally active audience interested in careers, technology, learning and personal growth."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 258
          }, this), /*#__PURE__*/jsxDEV("div", {
            className: "audience-stats",
            "x-file-name": "App",
            "x-line-number": "58",
            "x-column": "382",
            "x-component": "div",
            "x-id": "App_58_382",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("div", {
              "x-file-name": "App",
              "x-line-number": "58",
              "x-column": "414",
              "x-component": "div",
              "x-id": "App_58_414",
              "x-dynamic": "false",
              children: [/*#__PURE__*/jsxDEV("strong", {
                "x-file-name": "App",
                "x-line-number": "58",
                "x-column": "419",
                "x-component": "strong",
                "x-id": "App_58_419",
                "x-dynamic": "false",
                children: "87.2%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 420
              }, this), /*#__PURE__*/jsxDEV("span", {
                "x-file-name": "App",
                "x-line-number": "58",
                "x-column": "441",
                "x-component": "span",
                "x-id": "App_58_441",
                "x-dynamic": "false",
                children: "Age 18\u201334"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 442
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 415
            }, this), /*#__PURE__*/jsxDEV("div", {
              "x-file-name": "App",
              "x-line-number": "58",
              "x-column": "469",
              "x-component": "div",
              "x-id": "App_58_469",
              "x-dynamic": "false",
              children: [/*#__PURE__*/jsxDEV("strong", {
                "x-file-name": "App",
                "x-line-number": "58",
                "x-column": "474",
                "x-component": "strong",
                "x-id": "App_58_474",
                "x-dynamic": "false",
                children: "89.8%"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 475
              }, this), /*#__PURE__*/jsxDEV("span", {
                "x-file-name": "App",
                "x-line-number": "58",
                "x-column": "496",
                "x-component": "span",
                "x-id": "App_58_496",
                "x-dynamic": "false",
                children: "India"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 497
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 470
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 383
          }, this), /*#__PURE__*/jsxDEV("div", {
            className: "city-list",
            "x-file-name": "App",
            "x-line-number": "58",
            "x-column": "526",
            "x-component": "div",
            "x-id": "App_58_526",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [/*#__PURE__*/jsxDEV("span", {
              "x-file-name": "App",
              "x-line-number": "58",
              "x-column": "553",
              "x-component": "span",
              "x-id": "App_58_553",
              "x-dynamic": "false",
              children: "TOP CITIES"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 554
            }, this), ["Bangalore", "Delhi", "Chennai", "Pune", "Mumbai"].map(city => /*#__PURE__*/jsxDEV("b", {
              "x-file-name": "App",
              "x-line-number": "58",
              "x-column": "643",
              "x-component": "b",
              "x-id": "App_58_643",
              "x-dynamic": "true",
              "x-source-type": "static-local",
              "x-source-file": "/app/frontend/src/App.js",
              "x-source-file-abs": "/app/frontend/src/App.js",
              "x-source-line": "58",
              "x-source-editable": "true",
              "x-array-file": "/app/frontend/src/App.js",
              "x-array-line": "58",
              "x-array-item-param": "city",
              "x-array-inline": "true",
              children: city
            }, city, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 644
            }, this))]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 527
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 150
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("section", {
        className: "performance-section",
        "data-testid": "performance-section",
        "x-file-name": "App",
        "x-line-number": "60",
        "x-column": "6",
        "x-component": "section",
        "x-id": "App_60_6",
        "x-dynamic": "false",
        children: /*#__PURE__*/jsxDEV("div", {
          className: "section-wrap",
          "x-file-name": "App",
          "x-line-number": "60",
          "x-column": "81",
          "x-component": "div",
          "x-id": "App_60_81",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("div", {
            className: "section-heading light reveal",
            "x-file-name": "App",
            "x-line-number": "60",
            "x-column": "111",
            "x-component": "div",
            "x-id": "App_60_111",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("div", {
              className: "section-label",
              "x-file-name": "App",
              "x-line-number": "60",
              "x-column": "157",
              "x-component": "div",
              "x-id": "App_60_157",
              "x-dynamic": "false",
              children: "05 / THE NUMBERS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 158
            }, this), /*#__PURE__*/jsxDEV("div", {
              "x-file-name": "App",
              "x-line-number": "60",
              "x-column": "210",
              "x-component": "div",
              "x-id": "App_60_210",
              "x-dynamic": "false",
              children: [/*#__PURE__*/jsxDEV("h2", {
                "x-file-name": "App",
                "x-line-number": "60",
                "x-column": "215",
                "x-component": "h2",
                "x-id": "App_60_215",
                "x-dynamic": "false",
                children: "Content That Connects"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 216
              }, this), /*#__PURE__*/jsxDEV("p", {
                "x-file-name": "App",
                "x-line-number": "60",
                "x-column": "245",
                "x-component": "p",
                "x-id": "App_60_245",
                "x-dynamic": "false",
                children: "Performance snapshot \xB7 Last 60 Days | July\u2013September 2026"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 246
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 211
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 112
          }, this), /*#__PURE__*/jsxDEV("div", {
            className: "performance-grid reveal",
            "x-file-name": "App",
            "x-line-number": "60",
            "x-column": "321",
            "x-component": "div",
            "x-id": "App_60_321",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [["1.2M+", "Reel Views"], ["488K", "Viewers"], ["96K+", "Content Interactions"], ["42.7K", "Average Reel Views"], ["17K", "Median Reel Views"], ["2.1L+", "Highest Reel Views"]].map(([value, label]) => /*#__PURE__*/jsxDEV(Stat, {
              value: value,
              label: label,
              dark: true,
              "x-file-name": "App",
              "x-line-number": "60",
              "x-column": "564",
              "x-component": "Stat",
              "x-id": "App_60_564",
              "x-dynamic": "true"
            }, label, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 565
            }, this))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 322
          }, this), /*#__PURE__*/jsxDEV("div", {
            className: "performance-foot reveal",
            "x-file-name": "App",
            "x-line-number": "60",
            "x-column": "625",
            "x-component": "div",
            "x-id": "App_60_625",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("span", {
              "x-file-name": "App",
              "x-line-number": "60",
              "x-column": "666",
              "x-component": "span",
              "x-id": "App_60_666",
              "x-dynamic": "false",
              children: "03"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 667
            }, this), /*#__PURE__*/jsxDEV("b", {
              "x-file-name": "App",
              "x-line-number": "60",
              "x-column": "681",
              "x-component": "b",
              "x-id": "App_60_681",
              "x-dynamic": "false",
              children: "Reels crossed 1L+ views"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 682
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 626
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 82
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("section", {
        className: "featured section-wrap",
        "data-testid": "featured-content-section",
        "x-file-name": "App",
        "x-line-number": "62",
        "x-column": "6",
        "x-component": "section",
        "x-id": "App_62_6",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("div", {
          className: "section-heading reveal",
          "x-file-name": "App",
          "x-line-number": "62",
          "x-column": "88",
          "x-component": "div",
          "x-id": "App_62_88",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("div", {
            className: "section-label",
            "x-file-name": "App",
            "x-line-number": "62",
            "x-column": "128",
            "x-component": "div",
            "x-id": "App_62_128",
            "x-dynamic": "false",
            children: "06 / FEATURED CONTENT"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 129
          }, this), /*#__PURE__*/jsxDEV("div", {
            "x-file-name": "App",
            "x-line-number": "62",
            "x-column": "186",
            "x-component": "div",
            "x-id": "App_62_186",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("h2", {
              "x-file-name": "App",
              "x-line-number": "62",
              "x-column": "191",
              "x-component": "h2",
              "x-id": "App_62_191",
              "x-dynamic": "false",
              children: "Worth a watch."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 192
            }, this), /*#__PURE__*/jsxDEV("p", {
              "x-file-name": "App",
              "x-line-number": "62",
              "x-column": "214",
              "x-component": "p",
              "x-id": "App_62_214",
              "x-dynamic": "false",
              children: ["Ideas, insights and a little", /*#__PURE__*/jsxDEV("br", {
                className: "desktop-only",
                "x-file-name": "App",
                "x-line-number": "62",
                "x-column": "245",
                "x-component": "br",
                "x-id": "App_62_245",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 246
              }, this), " career clarity."]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 215
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 187
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 89
        }, this), /*#__PURE__*/jsxDEV("div", {
          className: "reel-grid",
          "x-file-name": "App",
          "x-line-number": "62",
          "x-column": "308",
          "x-component": "div",
          "x-id": "App_62_308",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: reels.map((url, index) => /*#__PURE__*/jsxDEV("a", {
            className: "reel-card reveal",
            href: url,
            target: "_blank",
            rel: "noreferrer",
            "data-testid": `featured-reel-${index + 1}`,
            "x-file-name": "App",
            "x-line-number": "62",
            "x-column": "362",
            "x-component": "a",
            "x-id": "App_62_362",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("div", {
              className: "reel-placeholder",
              "x-file-name": "App",
              "x-line-number": "62",
              "x-column": "491",
              "x-component": "div",
              "x-id": "App_62_491",
              "x-dynamic": "false",
              children: [/*#__PURE__*/jsxDEV("div", {
                className: "reel-icon",
                "x-file-name": "App",
                "x-line-number": "62",
                "x-column": "525",
                "x-component": "div",
                "x-id": "App_62_525",
                "x-dynamic": "false",
                children: /*#__PURE__*/jsxDEV(Instagram, {
                  size: 24,
                  "x-file-name": "App",
                  "x-line-number": "62",
                  "x-column": "552",
                  "x-component": "Instagram",
                  "x-id": "App_62_552",
                  "x-dynamic": "true",
                  "x-source-type": "external",
                  "x-source-var": "reels",
                  "x-source-editable": "false",
                  "x-array-var": "reels",
                  "x-array-item-param": "url"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 553
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 526
              }, this), /*#__PURE__*/jsxDEV("span", {
                "x-file-name": "App",
                "x-line-number": "62",
                "x-column": "581",
                "x-component": "span",
                "x-id": "App_62_581",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: ["INSTAGRAM REEL 0", /*#__PURE__*/jsxDEV("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "App",
                  "x-line-number": "62",
                  "x-column": "581",
                  "x-component": "span",
                  "x-id": "App_62_581_expr1",
                  "x-dynamic": "true",
                  "x-source-type": "computed",
                  "x-source-editable": "false",
                  children: index + 1
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 582
              }, this), /*#__PURE__*/jsxDEV(Play, {
                size: 18,
                fill: "currentColor",
                "x-file-name": "App",
                "x-line-number": "62",
                "x-column": "621",
                "x-component": "Play",
                "x-id": "App_62_621",
                "x-dynamic": "true",
                "x-source-type": "external",
                "x-source-var": "reels",
                "x-source-editable": "false",
                "x-array-var": "reels",
                "x-array-item-param": "url"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 622
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 492
            }, this), /*#__PURE__*/jsxDEV("div", {
              className: "reel-card-foot",
              "x-file-name": "App",
              "x-line-number": "62",
              "x-column": "665",
              "x-component": "div",
              "x-id": "App_62_665",
              "x-dynamic": "false",
              children: [/*#__PURE__*/jsxDEV("span", {
                "x-file-name": "App",
                "x-line-number": "62",
                "x-column": "697",
                "x-component": "span",
                "x-id": "App_62_697",
                "x-dynamic": "false",
                children: "View Reel"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 698
              }, this), /*#__PURE__*/jsxDEV(ArrowUpRight, {
                size: 16,
                "x-file-name": "App",
                "x-line-number": "62",
                "x-column": "719",
                "x-component": "ArrowUpRight",
                "x-id": "App_62_719",
                "x-dynamic": "true",
                "x-source-type": "external",
                "x-source-var": "reels",
                "x-source-editable": "false",
                "x-array-var": "reels",
                "x-array-item-param": "url"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 720
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 666
            }, this)]
          }, url, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 363
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 309
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("section", {
        className: "collabs section-wrap reveal",
        "data-testid": "collaborations-section",
        "x-file-name": "App",
        "x-line-number": "64",
        "x-column": "6",
        "x-component": "section",
        "x-id": "App_64_6",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("div", {
          className: "section-label",
          "x-file-name": "App",
          "x-line-number": "64",
          "x-column": "92",
          "x-component": "div",
          "x-id": "App_64_92",
          "x-dynamic": "false",
          children: "07 / SELECTED COLLABORATIONS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 93
        }, this), /*#__PURE__*/jsxDEV("div", {
          className: "collab-heading",
          "x-file-name": "App",
          "x-line-number": "64",
          "x-column": "157",
          "x-component": "div",
          "x-id": "App_64_157",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("h2", {
            "x-file-name": "App",
            "x-line-number": "64",
            "x-column": "189",
            "x-component": "h2",
            "x-id": "App_64_189",
            "x-dynamic": "false",
            children: ["Good work is", /*#__PURE__*/jsxDEV("br", {
              "x-file-name": "App",
              "x-line-number": "64",
              "x-column": "205",
              "x-component": "br",
              "x-id": "App_64_205",
              "x-dynamic": "false"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 206
            }, this), /*#__PURE__*/jsxDEV("span", {
              "x-file-name": "App",
              "x-line-number": "64",
              "x-column": "211",
              "x-component": "span",
              "x-id": "App_64_211",
              "x-dynamic": "false",
              children: "better together."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 212
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 190
          }, this), /*#__PURE__*/jsxDEV("p", {
            "x-file-name": "App",
            "x-line-number": "64",
            "x-column": "245",
            "x-component": "p",
            "x-id": "App_64_245",
            "x-dynamic": "false",
            children: "Brand partnerships built around clear ideas, honest storytelling and content people actually want to watch."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 246
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 158
        }, this), /*#__PURE__*/jsxDEV("div", {
          className: "collab-list",
          "x-file-name": "App",
          "x-line-number": "64",
          "x-column": "365",
          "x-component": "div",
          "x-id": "App_64_365",
          "x-dynamic": "true",
          "x-source-type": "computed",
          "x-source-editable": "false",
          children: collabs.map(([name, url], index) => /*#__PURE__*/jsxDEV("a", {
            href: url,
            target: "_blank",
            rel: "noreferrer",
            className: "collab-item",
            "data-testid": `collaboration-${index + 1}`,
            "x-file-name": "App",
            "x-line-number": "64",
            "x-column": "431",
            "x-component": "a",
            "x-id": "App_64_431",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("span", {
              "x-file-name": "App",
              "x-line-number": "64",
              "x-column": "570",
              "x-component": "span",
              "x-id": "App_64_570",
              "x-dynamic": "true",
              "x-source-type": "computed",
              "x-source-editable": "false",
              children: ["0", /*#__PURE__*/jsxDEV("span", {
                "data-ve-dynamic": "true",
                "x-excluded": "true",
                style: {
                  display: "contents"
                },
                "x-file-name": "App",
                "x-line-number": "64",
                "x-column": "570",
                "x-component": "span",
                "x-id": "App_64_570_expr1",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: index + 1
              }, void 0, false)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 571
            }, this), /*#__PURE__*/jsxDEV("strong", {
              "x-file-name": "App",
              "x-line-number": "64",
              "x-column": "595",
              "x-component": "strong",
              "x-id": "App_64_595",
              "x-dynamic": "true",
              "x-source-type": "unknown",
              "x-source-var": "name",
              "x-source-editable": "false",
              children: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 596
            }, this), /*#__PURE__*/jsxDEV(ArrowUpRight, {
              size: 20,
              "x-file-name": "App",
              "x-line-number": "64",
              "x-column": "618",
              "x-component": "ArrowUpRight",
              "x-id": "App_64_618",
              "x-dynamic": "true"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 619
            }, this)]
          }, `${name}-${index}`, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 432
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 366
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("section", {
        className: "work-section section-wrap reveal",
        id: "work",
        "data-testid": "work-section",
        "x-file-name": "App",
        "x-line-number": "66",
        "x-column": "6",
        "x-component": "section",
        "x-id": "App_66_6",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("div", {
          className: "section-label",
          "x-file-name": "App",
          "x-line-number": "66",
          "x-column": "97",
          "x-component": "div",
          "x-id": "App_66_97",
          "x-dynamic": "false",
          children: "08 / WORK WITH ME"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 98
        }, this), /*#__PURE__*/jsxDEV("div", {
          className: "work-content",
          "x-file-name": "App",
          "x-line-number": "66",
          "x-column": "151",
          "x-component": "div",
          "x-id": "App_66_151",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("div", {
            "x-file-name": "App",
            "x-line-number": "66",
            "x-column": "181",
            "x-component": "div",
            "x-id": "App_66_181",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("h2", {
              "x-file-name": "App",
              "x-line-number": "66",
              "x-column": "186",
              "x-component": "h2",
              "x-id": "App_66_186",
              "x-dynamic": "false",
              children: ["Let\u2019s create something", /*#__PURE__*/jsxDEV("br", {
                "x-file-name": "App",
                "x-line-number": "66",
                "x-column": "212",
                "x-component": "br",
                "x-id": "App_66_212",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 213
              }, this), /*#__PURE__*/jsxDEV("em", {
                "x-file-name": "App",
                "x-line-number": "66",
                "x-column": "218",
                "x-component": "em",
                "x-id": "App_66_218",
                "x-dynamic": "false",
                children: ["people actually want", /*#__PURE__*/jsxDEV("br", {
                  "x-file-name": "App",
                  "x-line-number": "66",
                  "x-column": "242",
                  "x-component": "br",
                  "x-id": "App_66_242",
                  "x-dynamic": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 243
                }, this), " to watch."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 219
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 187
            }, this), /*#__PURE__*/jsxDEV("p", {
              "x-file-name": "App",
              "x-line-number": "66",
              "x-column": "268",
              "x-component": "p",
              "x-id": "App_66_268",
              "x-dynamic": "false",
              children: "I partner with brands that want to connect with a young, career-focused and digitally engaged audience through relatable short-form content."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 269
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 182
          }, this), /*#__PURE__*/jsxDEV("div", {
            className: "work-formats",
            "x-file-name": "App",
            "x-line-number": "66",
            "x-column": "421",
            "x-component": "div",
            "x-id": "App_66_421",
            "x-dynamic": "true",
            "x-source-type": "computed",
            "x-source-editable": "false",
            children: [/*#__PURE__*/jsxDEV("span", {
              "x-file-name": "App",
              "x-line-number": "66",
              "x-column": "451",
              "x-component": "span",
              "x-id": "App_66_451",
              "x-dynamic": "false",
              children: "COLLABORATION FORMATS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 452
            }, this), ["Sponsored Instagram Reels", "Story Integrations", "UGC Content", "Carousel Campaigns", "Reel + Story Campaigns", "Long-term Partnerships"].map((format, index) => /*#__PURE__*/jsxDEV("div", {
              "x-file-name": "App",
              "x-line-number": "66",
              "x-column": "650",
              "x-component": "div",
              "x-id": "App_66_650",
              "x-dynamic": "true",
              "x-source-type": "static-local",
              "x-source-file": "/app/frontend/src/App.js",
              "x-source-file-abs": "/app/frontend/src/App.js",
              "x-source-line": "66",
              "x-source-editable": "true",
              "x-array-file": "/app/frontend/src/App.js",
              "x-array-line": "66",
              "x-array-item-param": "format",
              "x-array-inline": "true",
              children: [/*#__PURE__*/jsxDEV("i", {
                "x-file-name": "App",
                "x-line-number": "66",
                "x-column": "668",
                "x-component": "i",
                "x-id": "App_66_668",
                "x-dynamic": "true",
                "x-source-type": "computed",
                "x-source-editable": "false",
                children: ["0", /*#__PURE__*/jsxDEV("span", {
                  "data-ve-dynamic": "true",
                  "x-excluded": "true",
                  style: {
                    display: "contents"
                  },
                  "x-file-name": "App",
                  "x-line-number": "66",
                  "x-column": "668",
                  "x-component": "i",
                  "x-id": "App_66_668_expr1",
                  "x-dynamic": "true",
                  "x-source-type": "computed",
                  "x-source-editable": "false",
                  children: index + 1
                }, void 0, false)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 669
              }, this), format]
            }, format, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 651
            }, this)), /*#__PURE__*/jsxDEV("a", {
              className: "button button-primary",
              href: "#contact",
              "data-testid": "discuss-collaboration-button",
              "x-file-name": "App",
              "x-line-number": "66",
              "x-column": "703",
              "x-component": "a",
              "x-id": "App_66_703",
              "x-dynamic": "false",
              children: ["Discuss a Collaboration ", /*#__PURE__*/jsxDEV(ArrowUpRight, {
                size: 18,
                "x-file-name": "App",
                "x-line-number": "66",
                "x-column": "823",
                "x-component": "ArrowUpRight",
                "x-id": "App_66_823",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 824
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 704
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 422
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 152
        }, this), /*#__PURE__*/jsxDEV("a", {
          className: "media-kit",
          href: "/MEDIA_KIT.pdf",
          "data-testid": "media-kit-download",
          "x-file-name": "App",
          "x-line-number": "66",
          "x-column": "865",
          "x-component": "a",
          "x-id": "App_66_865",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV(Download, {
            size: 18,
            "x-file-name": "App",
            "x-line-number": "66",
            "x-column": "945",
            "x-component": "Download",
            "x-id": "App_66_945",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 946
          }, this), /*#__PURE__*/jsxDEV("span", {
            "x-file-name": "App",
            "x-line-number": "66",
            "x-column": "967",
            "x-component": "span",
            "x-id": "App_66_967",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("b", {
              "x-file-name": "App",
              "x-line-number": "66",
              "x-column": "973",
              "x-component": "b",
              "x-id": "App_66_973",
              "x-dynamic": "false",
              children: "Download Media Kit"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 974
            }, this), /*#__PURE__*/jsxDEV("small", {
              "x-file-name": "App",
              "x-line-number": "66",
              "x-column": "998",
              "x-component": "small",
              "x-id": "App_66_998",
              "x-dynamic": "false",
              children: "MEDIA_KIT.pdf \xB7 file placeholder"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 999
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 968
          }, this), /*#__PURE__*/jsxDEV(ArrowUpRight, {
            size: 18,
            "x-file-name": "App",
            "x-line-number": "66",
            "x-column": "1052",
            "x-component": "ArrowUpRight",
            "x-id": "App_66_1052",
            "x-dynamic": "false"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 1053
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 866
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }, this), /*#__PURE__*/jsxDEV("section", {
        className: "contact section-wrap reveal",
        id: "contact",
        "data-testid": "contact-section",
        "x-file-name": "App",
        "x-line-number": "68",
        "x-column": "6",
        "x-component": "section",
        "x-id": "App_68_6",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("div", {
          className: "section-label",
          "x-file-name": "App",
          "x-line-number": "68",
          "x-column": "98",
          "x-component": "div",
          "x-id": "App_68_98",
          "x-dynamic": "false",
          children: "09 / CONTACT"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 99
        }, this), /*#__PURE__*/jsxDEV("div", {
          className: "contact-content",
          "x-file-name": "App",
          "x-line-number": "68",
          "x-column": "147",
          "x-component": "div",
          "x-id": "App_68_147",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("div", {
            "x-file-name": "App",
            "x-line-number": "68",
            "x-column": "180",
            "x-component": "div",
            "x-id": "App_68_180",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("h2", {
              "x-file-name": "App",
              "x-line-number": "68",
              "x-column": "185",
              "x-component": "h2",
              "x-id": "App_68_185",
              "x-dynamic": "false",
              children: ["Let\u2019s work", /*#__PURE__*/jsxDEV("br", {
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "199",
                "x-component": "br",
                "x-id": "App_68_199",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 200
              }, this), /*#__PURE__*/jsxDEV("span", {
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "205",
                "x-component": "span",
                "x-id": "App_68_205",
                "x-dynamic": "false",
                children: "together."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 206
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 186
            }, this), /*#__PURE__*/jsxDEV("p", {
              "x-file-name": "App",
              "x-line-number": "68",
              "x-column": "232",
              "x-component": "p",
              "x-id": "App_68_232",
              "x-dynamic": "false",
              children: "For collaborations, brand partnerships, UGC and campaign enquiries, get in touch."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 233
            }, this), /*#__PURE__*/jsxDEV("div", {
              className: "contact-links",
              "x-file-name": "App",
              "x-line-number": "68",
              "x-column": "320",
              "x-component": "div",
              "x-id": "App_68_320",
              "x-dynamic": "false",
              children: [/*#__PURE__*/jsxDEV("a", {
                href: "mailto:sakshi.jaiswal.info@gmail.com",
                className: "email-link",
                "data-testid": "email-me-link",
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "351",
                "x-component": "a",
                "x-id": "App_68_351",
                "x-dynamic": "false",
                children: ["sakshi.jaiswal.info@gmail.com ", /*#__PURE__*/jsxDEV(ArrowUpRight, {
                  size: 20,
                  "x-file-name": "App",
                  "x-line-number": "68",
                  "x-column": "479",
                  "x-component": "ArrowUpRight",
                  "x-id": "App_68_479",
                  "x-dynamic": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 480
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 352
              }, this), /*#__PURE__*/jsxDEV("a", {
                href: instagram,
                target: "_blank",
                rel: "noreferrer",
                "data-testid": "contact-instagram-link",
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "509",
                "x-component": "a",
                "x-id": "App_68_509",
                "x-dynamic": "false",
                children: [/*#__PURE__*/jsxDEV(Instagram, {
                  size: 18,
                  "x-file-name": "App",
                  "x-line-number": "68",
                  "x-column": "599",
                  "x-component": "Instagram",
                  "x-id": "App_68_599",
                  "x-dynamic": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 600
                }, this), " @CareerBeyond_Degree ", /*#__PURE__*/jsxDEV(ArrowUpRight, {
                  size: 17,
                  "x-file-name": "App",
                  "x-line-number": "68",
                  "x-column": "644",
                  "x-component": "ArrowUpRight",
                  "x-id": "App_68_644",
                  "x-dynamic": "false"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 645
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 510
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 321
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 181
          }, this), /*#__PURE__*/jsxDEV("form", {
            className: "enquiry-form",
            onSubmit: submitEnquiry,
            "data-testid": "collaboration-enquiry-form",
            "x-file-name": "App",
            "x-line-number": "68",
            "x-column": "686",
            "x-component": "form",
            "x-id": "App_68_686",
            "x-dynamic": "false",
            children: [/*#__PURE__*/jsxDEV("div", {
              className: "form-heading",
              "x-file-name": "App",
              "x-line-number": "68",
              "x-column": "783",
              "x-component": "div",
              "x-id": "App_68_783",
              "x-dynamic": "false",
              children: [/*#__PURE__*/jsxDEV("span", {
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "813",
                "x-component": "span",
                "x-id": "App_68_813",
                "x-dynamic": "false",
                children: "START A CONVERSATION"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 814
              }, this), /*#__PURE__*/jsxDEV("p", {
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "846",
                "x-component": "p",
                "x-id": "App_68_846",
                "x-dynamic": "false",
                children: "Tell me a little about what you\u2019re building."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 847
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 784
            }, this), /*#__PURE__*/jsxDEV("label", {
              "x-file-name": "App",
              "x-line-number": "68",
              "x-column": "903",
              "x-component": "label",
              "x-id": "App_68_903",
              "x-dynamic": "false",
              children: ["Name", /*#__PURE__*/jsxDEV("input", {
                required: true,
                value: formValues.name,
                onChange: event => setFormValues({
                  ...formValues,
                  name: event.target.value
                }),
                placeholder: "Your name",
                "data-testid": "enquiry-name-input",
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "914",
                "x-component": "input",
                "x-id": "App_68_914",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 915
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 904
            }, this), /*#__PURE__*/jsxDEV("label", {
              "x-file-name": "App",
              "x-line-number": "68",
              "x-column": "1102",
              "x-component": "label",
              "x-id": "App_68_1102",
              "x-dynamic": "false",
              children: ["Brand", /*#__PURE__*/jsxDEV("input", {
                required: true,
                value: formValues.brand,
                onChange: event => setFormValues({
                  ...formValues,
                  brand: event.target.value
                }),
                placeholder: "Brand or company",
                "data-testid": "enquiry-brand-input",
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "1114",
                "x-component": "input",
                "x-id": "App_68_1114",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 1115
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 1103
            }, this), /*#__PURE__*/jsxDEV("label", {
              "x-file-name": "App",
              "x-line-number": "68",
              "x-column": "1312",
              "x-component": "label",
              "x-id": "App_68_1312",
              "x-dynamic": "false",
              children: ["Email", /*#__PURE__*/jsxDEV("input", {
                required: true,
                type: "email",
                value: formValues.email,
                onChange: event => setFormValues({
                  ...formValues,
                  email: event.target.value
                }),
                placeholder: "you@company.com",
                "data-testid": "enquiry-email-input",
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "1324",
                "x-component": "input",
                "x-id": "App_68_1324",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 1325
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 1313
            }, this), /*#__PURE__*/jsxDEV("label", {
              "x-file-name": "App",
              "x-line-number": "68",
              "x-column": "1534",
              "x-component": "label",
              "x-id": "App_68_1534",
              "x-dynamic": "false",
              children: ["Campaign / Message", /*#__PURE__*/jsxDEV("textarea", {
                required: true,
                rows: "4",
                value: formValues.message,
                onChange: event => setFormValues({
                  ...formValues,
                  message: event.target.value
                }),
                placeholder: "What would you like to create?",
                "data-testid": "enquiry-message-input",
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "1559",
                "x-component": "textarea",
                "x-id": "App_68_1559",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 1560
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 1535
            }, this), /*#__PURE__*/jsxDEV("button", {
              className: "button button-primary",
              type: "submit",
              "data-testid": "enquiry-submit-button",
              "x-file-name": "App",
              "x-line-number": "68",
              "x-column": "1789",
              "x-component": "button",
              "x-id": "App_68_1789",
              "x-dynamic": "false",
              children: ["Send Enquiry ", /*#__PURE__*/jsxDEV(ArrowUpRight, {
                size: 18,
                "x-file-name": "App",
                "x-line-number": "68",
                "x-column": "1894",
                "x-component": "ArrowUpRight",
                "x-id": "App_68_1894",
                "x-dynamic": "false"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 1895
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 1790
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 687
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 148
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }, this), /*#__PURE__*/jsxDEV("footer", {
      className: "footer section-wrap",
      "data-testid": "site-footer",
      "x-file-name": "App",
      "x-line-number": "70",
      "x-column": "4",
      "x-component": "footer",
      "x-id": "App_70_4",
      "x-dynamic": "false",
      children: [/*#__PURE__*/jsxDEV("div", {
        "x-file-name": "App",
        "x-line-number": "70",
        "x-column": "70",
        "x-component": "div",
        "x-id": "App_70_70",
        "x-dynamic": "false",
        children: [/*#__PURE__*/jsxDEV("a", {
          className: "brand-mark",
          href: "#home",
          "data-testid": "footer-home-link",
          "x-file-name": "App",
          "x-line-number": "70",
          "x-column": "75",
          "x-component": "a",
          "x-id": "App_70_75",
          "x-dynamic": "false",
          children: [/*#__PURE__*/jsxDEV("span", {
            "x-file-name": "App",
            "x-line-number": "70",
            "x-column": "145",
            "x-component": "span",
            "x-id": "App_70_145",
            "x-dynamic": "false",
            children: "SJ"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 146
          }, this), /*#__PURE__*/jsxDEV("strong", {
            "x-file-name": "App",
            "x-line-number": "70",
            "x-column": "160",
            "x-component": "strong",
            "x-id": "App_70_160",
            "x-dynamic": "false",
            children: "Sakshi Jaiswal"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 161
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 76
        }, this), /*#__PURE__*/jsxDEV("p", {
          "x-file-name": "App",
          "x-line-number": "70",
          "x-column": "195",
          "x-component": "p",
          "x-id": "App_70_195",
          "x-dynamic": "false",
          children: "Career & Tech Creator"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 196
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 71
      }, this), /*#__PURE__*/jsxDEV("a", {
        href: instagram,
        target: "_blank",
        rel: "noreferrer",
        "data-testid": "footer-instagram-link",
        "x-file-name": "App",
        "x-line-number": "70",
        "x-column": "229",
        "x-component": "a",
        "x-id": "App_70_229",
        "x-dynamic": "false",
        children: ["@CareerBeyond_Degree ", /*#__PURE__*/jsxDEV(Instagram, {
          size: 16,
          "x-file-name": "App",
          "x-line-number": "70",
          "x-column": "339",
          "x-component": "Instagram",
          "x-id": "App_70_339",
          "x-dynamic": "false"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 340
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 230
      }, this), /*#__PURE__*/jsxDEV("a", {
        href: "mailto:sakshi.jaiswal.info@gmail.com",
        "data-testid": "footer-email-link",
        "x-file-name": "App",
        "x-line-number": "70",
        "x-column": "366",
        "x-component": "a",
        "x-id": "App_70_366",
        "x-dynamic": "false",
        children: "sakshi.jaiswal.info@gmail.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 367
      }, this), /*#__PURE__*/jsxDEV("small", {
        "x-file-name": "App",
        "x-line-number": "70",
        "x-column": "478",
        "x-component": "small",
        "x-id": "App_70_478",
        "x-dynamic": "false",
        children: "Copyright \xA9 2026 Sakshi Jaiswal"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 479
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
/* harmony default export */ 
export default App;
