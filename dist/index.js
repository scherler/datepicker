/*! For license information please see index.js.LICENSE.txt */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react'), require('react-bootstrap'), require('d3-time'), require('react-icons/bs')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'react-bootstrap', 'd3-time', 'react-icons/bs'], t)
    : 'object' == typeof exports
    ? (exports.datePicker = t(
        require('react'),
        require('react-bootstrap'),
        require('d3-time'),
        require('react-icons/bs')
      ))
    : (e.datePicker = t(e.react, e['react-bootstrap'], e['d3-time'], e['react-icons/bs']));
})(self, function (e, t, r, n) {
  return (() => {
    var a = {
        184: (e, t) => {
          var r;
          !(function () {
            'use strict';
            var n = {}.hasOwnProperty;
            function a() {
              for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                  var o = typeof r;
                  if ('string' === o || 'number' === o) e.push(r);
                  else if (Array.isArray(r)) {
                    if (r.length) {
                      var i = a.apply(null, r);
                      i && e.push(i);
                    }
                  } else if ('object' === o)
                    if (r.toString === Object.prototype.toString) for (var c in r) n.call(r, c) && r[c] && e.push(c);
                    else e.push(r.toString());
                }
              }
              return e.join(' ');
            }
            e.exports
              ? ((a.default = a), (e.exports = a))
              : void 0 ===
                  (r = function () {
                    return a;
                  }.apply(t, [])) || (e.exports = r);
          })();
        },
        50: (e, t, r) => {
          'use strict';
          r.d(t, { Z: () => o });
          var n = r(645),
            a = r.n(n)()(function (e) {
              return e[1];
            });
          a.push([
            e.id,
            '.datepicker svg {\n    fill: currentColor\n}\n.datepicker-day:hover rect:not(.text-primary),\n.datepicker-day:focus rect:not(.text-primary){\n  fill: #f2f5f7 !important;\n  pointer-events: all !important;\n}\n.input-group-active input{\n  border: 2px solid #007acc !important;\n  border-right: 0 !important;\n  transition-delay: -0.2s;\n}\n.datepicker .input-group-active .form-control,\n.input-group-unstyled .form-control {\n  border: 2px solid #cfd4d8;\n  border-right: 0 !important;\n  transition-delay: -0.2s;\n}\n.was-validated .datepicker-trigger .form-control:valid{\n  border: 2px solid #cfd4d8;\n  border-right: 0 !important;\n  transition-delay: -0.2s;\n}\n.was-validated .form-control:valid + div > .input-group-text{\n  border-left: 0 !important;\n  border-top-right-radius: 4px !important;\n  border-bottom-right-radius: 4px !important;\n  transition-delay: -0.2s;\n}\n.was-validated .datepicker-trigger .form-control:invalid:focus{\n  box-shadow: none !important;\n}\n.was-validated .datepicker-trigger .form-control:valid:focus{\n  box-shadow: none !important;\n}\n.was-validated .form-control:invalid + div > .input-group-text{\n  border: 2px solid #e22b2f !important;\n  border-left: 0 !important;\n  border-top-right-radius: 4px !important;\n  border-bottom-right-radius: 4px !important;\n  transition-delay: -0.2s;\n}\n.input-group-unstyled .input-group-text {\n  border: 2px solid #cfd4d8;\n  border-left: 0;\n  background-color: transparent;\n  border-top-right-radius: 4px !important;\n  border-bottom-right-radius: 4px !important;\n  transition-delay: -0.2s;\n}\n.datepicker .input-group-unstyled:focus-within .form-control{\n  border: 2px solid #007acc !important;\n  border-right: 0 !important;\n  transition-delay: -0.2s;\n}\n.was-validated .datepicker-trigger .form-control:invalid{\n  border: 2px solid #e22b2f !important;\n  border-right: 0 !important;\n  transition-delay: -0.2s;\n}\n\n.input-group-active .input-group-text,\n.input-group-unstyled:focus-within .input-group-text{\n  border: 2px solid #007acc !important;\n  border-left: 0 !important;\n  border-top-right-radius: 4px !important;\n  border-bottom-right-radius: 4px !important;\n  transition-delay: -0.2s;\n}\n.datepicker {\n  max-width: 264px;\n}\n.datepicker .input-group-prepend svg {\n  fill: #9ba7af;\n}\n.datepicker .input-group-prepend:focus-within{\n  border: 2px dotted #007acc !important;\n}\n.datepicker .input-group-prepend svg:hover,\n.datepicker .input-group-prepend:focus-within svg{\n  fill: #007acc;\n}\n',
            '',
          ]);
          const o = a;
        },
        645: (e) => {
          'use strict';
          e.exports = function (e) {
            var t = [];
            return (
              (t.toString = function () {
                return this.map(function (t) {
                  var r = e(t);
                  return t[2] ? '@media '.concat(t[2], ' {').concat(r, '}') : r;
                }).join('');
              }),
              (t.i = function (e, r, n) {
                'string' == typeof e && (e = [[null, e, '']]);
                var a = {};
                if (n)
                  for (var o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    null != i && (a[i] = !0);
                  }
                for (var c = 0; c < e.length; c++) {
                  var l = [].concat(e[c]);
                  (n && a[l[0]]) || (r && (l[2] ? (l[2] = ''.concat(r, ' and ').concat(l[2])) : (l[2] = r)), t.push(l));
                }
              }),
              t
            );
          };
        },
        695: (e) => {
          'use strict';
          var t = {};
          e.exports = function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          };
        },
        379: (e) => {
          'use strict';
          var t = [];
          function r(e) {
            for (var r = -1, n = 0; n < t.length; n++)
              if (t[n].identifier === e) {
                r = n;
                break;
              }
            return r;
          }
          function n(e, n) {
            for (var o = {}, i = [], c = 0; c < e.length; c++) {
              var l = e[c],
                u = n.base ? l[0] + n.base : l[0],
                s = o[u] || 0,
                d = ''.concat(u, ' ').concat(s);
              o[u] = s + 1;
              var p = r(d),
                f = { css: l[1], media: l[2], sourceMap: l[3] };
              -1 !== p
                ? (t[p].references++, t[p].updater(f))
                : t.push({ identifier: d, updater: a(f, n), references: 1 }),
                i.push(d);
            }
            return i;
          }
          function a(e, t) {
            var r = t.domAPI(t);
            return (
              r.update(e),
              function (t) {
                if (t) {
                  if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                  r.update((e = t));
                } else r.remove();
              }
            );
          }
          e.exports = function (e, a) {
            var o = n((e = e || []), (a = a || {}));
            return function (e) {
              e = e || [];
              for (var i = 0; i < o.length; i++) {
                var c = r(o[i]);
                t[c].references--;
              }
              for (var l = n(e, a), u = 0; u < o.length; u++) {
                var s = r(o[u]);
                0 === t[s].references && (t[s].updater(), t.splice(s, 1));
              }
              o = l;
            };
          };
        },
        216: (e) => {
          'use strict';
          e.exports = function (e) {
            var t = document.createElement('style');
            return e.setAttributes(t, e.attributes), e.insert(t), t;
          };
        },
        795: (e) => {
          'use strict';
          e.exports = function (e) {
            var t = e.insertStyleElement(e);
            return {
              update: function (r) {
                !(function (e, t, r) {
                  var n = r.css,
                    a = r.media,
                    o = r.sourceMap;
                  a ? e.setAttribute('media', a) : e.removeAttribute('media'),
                    o &&
                      'undefined' != typeof btoa &&
                      (n += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                        ' */'
                      )),
                    t.styleTagTransform(n, e);
                })(t, e, r);
              },
              remove: function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(t);
              },
            };
          };
        },
        365: (e) => {
          'use strict';
          e.exports = r;
        },
        297: (t) => {
          'use strict';
          t.exports = e;
        },
        226: (e) => {
          'use strict';
          e.exports = t;
        },
        701: (e) => {
          'use strict';
          e.exports = n;
        },
      },
      o = {};
    function i(e) {
      var t = o[e];
      if (void 0 !== t) return t.exports;
      var r = (o[e] = { id: e, exports: {} });
      return a[e](r, r.exports, i), r.exports;
    }
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
      (i.d = (e, t) => {
        for (var r in t) i.o(t, r) && !i.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (i.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      });
    var c = {};
    return (
      (() => {
        'use strict';
        i.r(c), i.d(c, { Datepicker: () => U, DefaultProperties: () => E });
        var e = i(297),
          t = i.n(e),
          r = i(226),
          n = function (e) {
            var r = e.formater,
              n =
                void 0 === r
                  ? function () {
                      return ''.concat(e.day);
                    }
                  : r,
              a = e.classes,
              o = void 0 === a ? { rect: 'text-white', text: 'text-gray-primary small' } : a,
              i = e.coordinates,
              c = i.x,
              l = void 0 === c ? 0 : c,
              u = i.y,
              s = void 0 === u ? 0 : u,
              d = i.ry,
              p = void 0 === d ? 0 : d,
              f = i.rx,
              y = void 0 === f ? 0 : f,
              h = e.width,
              m = void 0 === h ? 30 : h,
              g = e.height,
              v = void 0 === g ? 30 : g,
              b = e.borderWidth,
              w = void 0 === b ? 1 : b,
              x = e.borderColor,
              D = e.onClick,
              k = e.suggestedKey;
            return t().createElement(
              'g',
              { id: k, cursor: 'pointer', className: 'datepicker-day', tabIndex: 0 },
              t().createElement('rect', {
                className: o.rect,
                onClick: function (e) {
                  return null == D ? void 0 : D(e);
                },
                x: l,
                y: s,
                rx: y,
                ry: p,
                width: m,
                height: v,
                style: { strokeWidth: w, stroke: x },
              }),
              t().createElement(
                'text',
                {
                  style: { textAnchor: 'middle' },
                  className: o.text,
                  onClick: function (e) {
                    return null == D ? void 0 : D(e);
                  },
                  x: l + m / 2,
                  y: s + (v - v / 3),
                },
                n(e)
              )
            );
          },
          a = i(365),
          o = [' ', 'Enter'],
          l = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
              r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              n = r.tabIndex,
              a = void 0 === n ? 0 : n,
              i = r.role,
              c = void 0 === i ? 'button' : i;
            return {
              role: c,
              tabIndex: a,
              onClick: e,
              onKeyDown: function (r) {
                var n = r.key;
                t.filter(function (e) {
                  return e === n;
                }).length > 0 && (r.preventDefault(), e(r));
              },
            };
          },
          u = function (e) {
            return 'datepicker-day-'.concat(e.getFullYear(), '-').concat(e.getMonth(), '-').concat(e.getDate());
          };
        function s() {
          return (s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
        }
        function d(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function p(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? d(Object(r), !0).forEach(function (t) {
                  f(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : d(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
          }
          return e;
        }
        function f(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          );
        }
        function y(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return h(e);
            })(e) ||
            (function (e) {
              if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                return Array.from(e);
            })(e) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return h(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === r && e.constructor && (r = e.constructor.name),
                  'Map' === r || 'Set' === r
                    ? Array.from(e)
                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? h(e, t)
                    : void 0
                );
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function h(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var m = function (e) {
            var r = e.currentDate,
              i = e.dayRadius,
              c = e.dayBorderWidth,
              l = e.dayBorderColor,
              d = e.todayBorderWidth,
              f = e.todayBorderRadius,
              h = e.todayBorderColor,
              m = e.width,
              g = e.height,
              v = e.daySpacing,
              b = e.offset,
              w = e.startDate,
              x = e.selection,
              D = e.setSelection,
              k = e.setShowPicker,
              S = e.isRange,
              O = e.autoclose,
              j = e.fixedSize,
              E = e.setCurrentDate,
              C = e.addBuffer,
              P = e.squares,
              A = (function (e) {
                var t = e.startDate,
                  r = (0, a.timeMonth)(t),
                  n = new Date(t.getFullYear(), t.getMonth() + 1, 0),
                  o = n.getDate(),
                  i = (function (e) {
                    for (var t = e.daysInMonth, r = e.startDate, n = [], a = 1; a <= t; )
                      n.push(new Date(r.getFullYear(), r.getMonth(), a)), a++;
                    return n;
                  })({ daysInMonth: o, startDate: r }),
                  c = new Date(r);
                c.setDate(1 - r.getDay());
                var l = Array(r.getDay()).map(function (e) {
                    return new Date(c.getFullYear(), c.getMonth(), c.getDate() + e);
                  }),
                  u = new Date(t.getFullYear(), t.getMonth() + 1, 1);
                return (
                  u.setDate(6 - n.getDay()),
                  {
                    startDate: t,
                    firstOfMonth: r,
                    totalDays: o,
                    days: i,
                    daysPrevMonth: l,
                    daysNextMonth: Array(6 - n.getDay())
                      .map(function (e) {
                        return new Date(u.getFullYear(), u.getMonth(), u.getDate() - e);
                      })
                      .sort(function (e, t) {
                        return e.getTime() - t.getTime();
                      }),
                  }
                );
              })({ startDate: w }),
              M = A.totalDays,
              B = A.days,
              T = A.firstOfMonth,
              I = A.daysNextMonth,
              W = A.daysPrevMonth,
              F = new Date().setHours(0, 0, 0, 0),
              N = function (e) {
                var t;
                (t =
                  S && 1 === x.length
                    ? [].concat(y(x), [e.getTime()]).sort(function (e, t) {
                        return e - t;
                      })
                    : [e.getTime()]),
                  D(t),
                  ((O && !S) || (O && S && t.length > 1)) &&
                    setTimeout(function () {
                      return k(!1);
                    }, O);
              },
              R = j
                ? { cellHeight: j, cellWidth: j }
                : (function (e) {
                    var t = e.daySpacing,
                      r = e.offset,
                      n = e.totalDays,
                      a = e.width,
                      o = e.height,
                      i = e.squares,
                      c = Math.ceil(n / 7),
                      l = (o - r - t * (c + 1)) / c,
                      u = (a - r - 8 * t) / 7;
                    return {
                      columns: 7,
                      rows: c,
                      cellHeight: i ? Math.min(l, u) : l,
                      cellWidth: i ? Math.min(l, u) : u,
                    };
                  })({ squares: P, totalDays: M, offset: b, daySpacing: v, width: m, height: g }),
              q = R.cellHeight,
              Y = R.cellWidth,
              H = C ? [].concat(y(W), y(B), y(I)) : B,
              K = (function (e) {
                var t = e.days,
                  r = e.cellWidth,
                  n = e.cellHeight,
                  o = e.daySpacing,
                  i = e.offset,
                  c = e.startDate,
                  l = o,
                  s = o + i;
                return t.map(function (e) {
                  var t = (function (e) {
                      var t = e.startDate,
                        r = e.date,
                        n = a.timeWeek.count(t, r),
                        o = r.getDate(),
                        i = r.getMonth(),
                        c = r.getFullYear();
                      return {
                        currentColumn: r.getDay(),
                        year: c,
                        currentRow: n,
                        firstWeek: n,
                        month: i,
                        date: r,
                        day: o,
                        suggestedKey: u(r),
                      };
                    })({ startDate: c, date: e }),
                    i = t.currentColumn,
                    d = t.currentRow,
                    p = t.firstWeek,
                    f = t.year,
                    y = t.month,
                    h = t.date,
                    m = t.day,
                    g = t.suggestedKey;
                  return {
                    coordinates: { x: l + o * i + r * i, y: s + o * d + n * d },
                    firstWeek: p,
                    day: m,
                    month: y,
                    year: f,
                    date: h,
                    width: r,
                    height: n,
                    suggestedKey: g,
                  };
                });
              })({ startDate: (C && W[0]) || T, days: H, offset: b + 30, cellHeight: q, cellWidth: Y, daySpacing: v }),
              U = (function (e) {
                var t = e.cellWidth,
                  r = e.daySpacing,
                  n = e.ticks,
                  a = void 0 === n ? Array(7) : n,
                  o = e.arrayOfWeekdays,
                  i = void 0 === o ? ['S', 'M', 'T', 'W', 'T', 'F', 'S'] : o,
                  c = t + r;
                return a.map(function (e) {
                  return { key: c * e, value: i[e], y: 0, x: c * e };
                });
              })({ cellHeight: q, cellWidth: Y, daySpacing: v });
            return t().createElement(
              'div',
              { className: 'd-flex justify-content-around' },
              t().createElement(
                'svg',
                s(
                  { role: 'grid', 'aria-labelledby': 'id-dialog-label' },
                  (function (e) {
                    var t = e.navigation,
                      r = e.exec,
                      n = e.close;
                    return {
                      onKeyDown: function (e) {
                        var a = e.key;
                        switch (a) {
                          case 'Home':
                            e.preventDefault(), t(-0.1);
                            break;
                          case 'PageUp':
                            e.preventDefault(), e.shiftKey ? t(360) : t(30);
                            break;
                          case 'PageDown':
                            e.preventDefault(), e.shiftKey ? t(-360) : t(-30);
                            break;
                          case 'End':
                            e.preventDefault(), t(0.1);
                            break;
                          case 'ArrowUp':
                            e.preventDefault(), t(-7);
                            break;
                          case 'ArrowDown':
                            e.preventDefault(), t(7);
                            break;
                          case 'ArrowLeft':
                            e.preventDefault(), t(-1);
                            break;
                          case 'ArrowRight':
                            e.preventDefault(), t(1);
                            break;
                          case 'Escape':
                            e.preventDefault(), n();
                            break;
                          default:
                            o.filter(function (e) {
                              return e === a;
                            }).length > 0 && (e.preventDefault(), r());
                        }
                      },
                    };
                  })({
                    navigation: function (e) {
                      var t = new Date(w);
                      switch (e) {
                        case -0.1:
                          t.setDate(t.getDate() - t.getDay()), E(t);
                          break;
                        case 0.1:
                          t.setDate(t.getDate() + t.getDay()), E(t);
                          break;
                        case 30:
                          t.setMonth(t.getMonth() + 1), E(t);
                          break;
                        case -30:
                          t.setMonth(t.getMonth() - 1), E(t);
                          break;
                        case 360:
                          t.setFullYear(t.getFullYear() + 1), E(t);
                          break;
                        case -360:
                          t.setFullYear(t.getFullYear() - 1), E(t);
                          break;
                        default:
                          t.setDate(t.getDate() + e), E(t);
                      }
                      setTimeout(function () {
                        var e = u(t),
                          r = document.getElementById(e);
                        r && (r.setAttribute('aria-selected', 'true'), r.focus());
                      }, 1);
                    },
                    exec: function () {
                      return N(r);
                    },
                    close: function () {
                      return k(!1);
                    },
                  }),
                  { width: m, height: g }
                ),
                U.map(function (e) {
                  return t().createElement(
                    'text',
                    { className: 'text-gray-light small', height: 50, key: e.key, x: e.x + 13, y: e.y + 25 },
                    e.value
                  );
                }),
                K.map(function (e) {
                  var r = p({}, e);
                  T.getMonth() !== r.date.getMonth() &&
                    (r.classes = { rect: 'text-white', text: 'text-secondary small' });
                  var a = r.date.getTime();
                  return (
                    (r.borderWidth = F === a ? d : c),
                    (r.borderColor = F === a ? h : l),
                    x.includes(a)
                      ? (r.classes = { rect: 'text-primary', text: 'text-white small' })
                      : a > x[0] && a < x[1] && (r.classes = { rect: 'text-info', text: 'text-white small' }),
                    (r.coordinates.rx = F === a ? f : i),
                    (r.coordinates.ry = F === a ? f : i),
                    (r.onClick = function () {
                      console.debug('You clicked ', r), N(r.date);
                    }),
                    t().createElement(n, s({ key: r.suggestedKey }, p({}, r)))
                  );
                })
              )
            );
          },
          g = i(701);
        function v() {
          return (v =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
        }
        var b = function (e) {
            var r = e.width,
              n = void 0 === r ? 220 : r,
              a = e.currentDate,
              o = e.setCurrentDate;
            return t().createElement(
              'svg',
              { className: 'datepicker-navigation', width: n, height: '25' },
              t().createElement(
                'g',
                null,
                t().createElement(
                  'rect',
                  v(
                    {
                      'aria-label': 'previous month',
                      className: 'text-white',
                      cursor: 'pointer',
                      x: 0,
                      width: 25,
                      height: 25,
                    },
                    l(function () {
                      o(new Date(a.getFullYear(), a.getMonth() - 1, 1));
                    })
                  )
                ),
                t().createElement(
                  g.BsChevronCompactLeft,
                  v(
                    { 'aria-label': 'previous month', x: 2, width: 24, cursor: 'pointer' },
                    l(function () {
                      o(new Date(a.getFullYear(), a.getMonth() - 1, 1));
                    }),
                    { xlinkHref: 'bootstrap-icons.svg#chevron-left', className: 'text-primary' }
                  )
                )
              ),
              t().createElement(
                'g',
                null,
                t().createElement(
                  'text',
                  {
                    'aria-live': 'polite',
                    className: 'h6',
                    x: '50%',
                    y: '50%',
                    dominantBaseline: 'middle',
                    textAnchor: 'middle',
                  },
                  a.toLocaleString('default', { month: 'long', year: 'numeric' })
                )
              ),
              t().createElement(
                'g',
                null,
                t().createElement(
                  'rect',
                  v(
                    {
                      'aria-label': 'next month',
                      className: 'text-white',
                      cursor: 'pointer',
                      x: n - 20,
                      width: 25,
                      height: 25,
                    },
                    l(function () {
                      o(new Date(a.getFullYear(), a.getMonth() + 1, 1));
                    })
                  )
                ),
                t().createElement(
                  g.BsChevronCompactRight,
                  v(
                    { 'aria-label': 'next month', width: 24, x: n - 20, cursor: 'pointer' },
                    l(function () {
                      o(new Date(a.getFullYear(), a.getMonth() + 1, 1));
                    }),
                    { className: 'text-primary' }
                  )
                )
              )
            );
          },
          w = function (e) {
            var r = e.width,
              n = e.height,
              a = e.daySpacing,
              o = e.offset,
              i = e.currentDate,
              c = e.setCurrentDate,
              l = e.selection,
              u = e.setSelection,
              s = e.setShowPicker,
              d = e.isRange,
              p = e.autoclose,
              f = e.dayRadius,
              y = e.dayBorderWidth,
              h = e.dayBorderColor,
              g = e.todayBorderWidth,
              v = e.todayBorderRadius,
              w = e.todayBorderColor,
              x = e.fixedSize,
              D = e.addBuffer,
              k = e.squares;
            return t().createElement(
              'div',
              { className: 'd-flex justify-content-between' },
              t().createElement(
                'div',
                {
                  role: 'dialog',
                  'aria-modal': 'true',
                  'aria-labelledby': 'id-dialog-label',
                  'aria-live': 'polite',
                  className: 'shadow border rounded p-3',
                },
                t().createElement(b, { width: r, currentDate: i, setCurrentDate: c }),
                t().createElement(m, {
                  currentDate: i,
                  setCurrentDate: c,
                  fixedSize: x,
                  dayRadius: f,
                  dayBorderWidth: y,
                  dayBorderColor: h,
                  todayBorderWidth: g,
                  todayBorderRadius: v,
                  todayBorderColor: w,
                  width: r,
                  height: n,
                  selection: l,
                  setSelection: u,
                  setShowPicker: s,
                  daySpacing: a,
                  offset: o,
                  startDate: i,
                  isRange: d,
                  autoclose: p,
                  addBuffer: D,
                  squares: k,
                })
              )
            );
          },
          x = i(184),
          D = i.n(x);
        function k() {
          return (k =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
        }
        function S(e, t) {
          if (e) {
            if ('string' == typeof e) return O(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return (
              'Object' === r && e.constructor && (r = e.constructor.name),
              'Map' === r || 'Set' === r
                ? Array.from(e)
                : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? O(e, t)
                : void 0
            );
          }
        }
        function O(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var j = function (n) {
          var a,
            o,
            i = n.setShowPicker,
            c = n.showPicker,
            u = n.isRange,
            s = n.setSelection,
            d = n.setCurrentDate,
            p = n.selection,
            f =
              ((a = (0, e.useState)(!1)),
              (o = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(a) ||
                (function (e, t) {
                  var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                  if (null != r) {
                    var n,
                      a,
                      o = [],
                      i = !0,
                      c = !1;
                    try {
                      for (
                        r = r.call(e);
                        !(i = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t);
                        i = !0
                      );
                    } catch (e) {
                      (c = !0), (a = e);
                    } finally {
                      try {
                        i || null == r.return || r.return();
                      } finally {
                        if (c) throw a;
                      }
                    }
                    return o;
                  }
                })(a, o) ||
                S(a, o) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()),
            y = f[0],
            h = f[1],
            m = '([0-1]{1}[0-9]{1}/[0-3]{1}[0-9]{1}/[0-9]{2})',
            v = u ? ''.concat(m, '-').concat(m) : m,
            b = 'mm/dd/yy',
            w = u ? ''.concat(b, '-').concat(b) : b,
            x = function (e) {
              var t = e.currentTarget;
              if (!1 === t.checkValidity()) e.preventDefault(), e.stopPropagation();
              else {
                var r;
                if (u) {
                  var n = (function (e) {
                    return (
                      (function (e) {
                        if (Array.isArray(e)) return O(e);
                      })(e) ||
                      (function (e) {
                        if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                          return Array.from(e);
                      })(e) ||
                      S(e) ||
                      (function () {
                        throw new TypeError(
                          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                      })()
                    );
                  })(
                    t.value.matchAll(
                      /([0-1]{1}[0-9]{1}\/[0-3]{1}[0-9]{1}\/[0-9]{2})-([0-1]{1}[0-9]{1}\/[0-3]{1}[0-9]{1}\/[0-9]{2})/g
                    )
                  );
                  r = [new Date(n[0][1]).getTime(), new Date(n[0][2]).getTime()];
                } else r = [new Date(t.value).getTime()];
                d(new Date(r[0])), s(r);
              }
              h(!0);
            },
            j = c ? t().createElement(g.BsX, null) : t().createElement(g.BsCalendar, null),
            E = p
              .map(function (e) {
                return new Date(e);
              })
              .map(function (e) {
                return e.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: '2-digit' });
              })
              .join('-');
          return t().createElement(
            r.Form,
            { noValidate: !0, validated: y, onSubmit: x },
            t().createElement(
              r.Form.Group,
              { className: 'datepicker-trigger', as: r.Col, controlId: 'validationCustomUsername' },
              t().createElement(
                r.InputGroup,
                { className: D()('input-group-unstyled', { 'input-group-active': c }) },
                t().createElement(r.Form.Control, {
                  key: E,
                  defaultValue: E,
                  onBlur: x,
                  pattern: v,
                  type: 'text',
                  placeholder: w,
                  'aria-describedby': 'inputGroupPrepend',
                  required: !0,
                }),
                t().createElement(
                  r.InputGroup.Prepend,
                  null,
                  t().createElement(
                    r.InputGroup.Text,
                    k(
                      { className: 'h-100', 'aria-label': 'Choose Date, selected date is '.concat(E) },
                      l(function () {
                        return i(!c);
                      }),
                      { id: 'inputGroupPrepend' }
                    ),
                    j
                  )
                ),
                t().createElement(r.Form.Control.Feedback, { type: 'invalid' }, 'Invalid date')
              )
            )
          );
        };
        const E = {
          squares: !0,
          addBuffer: !1,
          fixedSize: 32,
          isRange: !1,
          autoclose: 1e3,
          width: 220,
          height: 220,
          daySpacing: 0,
          offset: 0,
          dayRadius: 0,
          dayBorderWidth: 0,
          dayBorderColor: 'transparent',
          todayBorderWidth: 1,
          todayBorderRadius: 3,
          todayBorderColor: 'rgb(234, 239, 242)',
        };
        var C = i(379),
          P = i.n(C),
          A = i(795),
          M = i.n(A),
          B = i(695),
          T = i.n(B),
          I = i(216),
          W = i.n(I),
          F = i(50),
          N = {
            styleTagTransform: function (e, t) {
              if (t.styleSheet) t.styleSheet.cssText = e;
              else {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(e));
              }
            },
            setAttributes: function (e) {
              var t = i.nc;
              t && e.setAttribute('nonce', t);
            },
            insert: function (e) {
              var t = T()('head');
              if (!t)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                );
              t.appendChild(e);
            },
          };
        function R(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
              if (null != r) {
                var n,
                  a,
                  o = [],
                  i = !0,
                  c = !1;
                try {
                  for (r = r.call(e); !(i = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                } catch (e) {
                  (c = !0), (a = e);
                } finally {
                  try {
                    i || null == r.return || r.return();
                  } finally {
                    if (c) throw a;
                  }
                }
                return o;
              }
            })(e, t) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return q(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  'Object' === r && e.constructor && (r = e.constructor.name),
                  'Map' === r || 'Set' === r
                    ? Array.from(e)
                    : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? q(e, t)
                    : void 0
                );
              }
            })(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function q(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        function Y(e, t) {
          var r = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t &&
              (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              r.push.apply(r, n);
          }
          return r;
        }
        function H(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Y(Object(r), !0).forEach(function (t) {
                  K(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : Y(Object(r)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
          }
          return e;
        }
        function K(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = r),
            e
          );
        }
        (N.domAPI = M()), (N.insertStyleElement = W()), P()(F.Z, N), F.Z && F.Z.locals && F.Z.locals;
        var U = function (n) {
          var a = H(H({}, E), n),
            o = R((0, e.useState)(n.startDate || new Date()), 2),
            i = o[0],
            c = o[1],
            l = R((0, e.useState)([]), 2),
            s = l[0],
            d = l[1],
            p = R((0, e.useState)(!1), 2),
            f = p[0],
            y = p[1],
            h = a.isRange,
            m = (0, e.useRef)(null),
            g = (0, e.useCallback)(
              function (e) {
                y(e),
                  e &&
                    setTimeout(function () {
                      var e = u(i),
                        t = document.getElementById(e);
                      t && (t.setAttribute('aria-selected', 'true'), t.focus());
                    }, 1);
              },
              [f, i]
            );
          return t().createElement(
            'div',
            { ref: m, className: 'datepicker' },
            t().createElement(j, {
              selection: s,
              showPicker: f,
              setShowPicker: g,
              isRange: h,
              setSelection: d,
              setCurrentDate: c,
            }),
            t().createElement(
              r.Overlay,
              { target: m, show: f, placement: 'bottom', container: m.current },
              t().createElement(
                w,
                H(H({}, a), {
                  showPicker: f,
                  currentDate: i,
                  setCurrentDate: c,
                  selection: s,
                  setSelection: d,
                  setShowPicker: g,
                })
              )
            )
          );
        };
      })(),
      c
    );
  })();
});
