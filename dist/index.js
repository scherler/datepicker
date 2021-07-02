!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t(require('react'), require('react-bootstrap'), require('react-icons/bs'), require('d3-time')))
    : 'function' == typeof define && define.amd
    ? define(['react', 'react-bootstrap', 'react-icons/bs', 'd3-time'], t)
    : 'object' == typeof exports
    ? (exports.datePicker = t(
        require('react'),
        require('react-bootstrap'),
        require('react-icons/bs'),
        require('d3-time')
      ))
    : (e.datePicker = t(e.react, e['react-bootstrap'], e['react-icons/bs'], e['d3-time']));
})(window, function (e, t, r, n) {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var a = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if ((r.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
          for (var a in e)
            r.d(
              n,
              a,
              function (t) {
                return e[t];
              }.bind(null, a)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, 'a', t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ''),
      r((r.s = 5))
    );
  })([
    function (t, r) {
      t.exports = e;
    },
    function (e, r) {
      e.exports = t;
    },
    function (e, t) {
      e.exports = r;
    },
    function (e, t) {
      e.exports = n;
    },
    function (e, t, r) {
      var n;
      /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
        'use strict';
        var r = {}.hasOwnProperty;
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var o = typeof n;
              if ('string' === o || 'number' === o) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var i = a.apply(null, n);
                  i && e.push(i);
                }
              } else if ('object' === o)
                if (n.toString === Object.prototype.toString) for (var c in n) r.call(n, c) && n[c] && e.push(c);
                else e.push(n.toString());
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
              (n = function () {
                return a;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
    function (e, t, r) {
      'use strict';
      r.r(t),
        r.d(t, 'Datepicker', function () {
          return Y;
        }),
        r.d(t, 'DefaultProperties', function () {
          return W;
        });
      var n = r(0),
        a = r.n(n),
        o = r(1),
        i = function (e) {
          var t = e.formater,
            r =
              void 0 === t
                ? function () {
                    return ''.concat(e.day);
                  }
                : t,
            n = e.classes,
            o = void 0 === n ? { rect: 'text-white', text: 'text-gray-primary small' } : n,
            i = e.coordinates,
            c = i.x,
            l = void 0 === c ? 0 : c,
            u = i.y,
            s = void 0 === u ? 0 : u,
            d = i.ry,
            f = void 0 === d ? 0 : d,
            y = i.rx,
            p = void 0 === y ? 0 : y,
            h = e.width,
            g = void 0 === h ? 30 : h,
            m = e.height,
            b = void 0 === m ? 30 : m,
            v = e.borderWidth,
            w = void 0 === v ? 1 : v,
            D = e.borderColor,
            x = e.onClick,
            O = e.suggestedKey;
          return a.a.createElement(
            'g',
            { id: O, cursor: 'pointer', className: 'datepicker-day', tabIndex: 0 },
            a.a.createElement('rect', {
              className: o.rect,
              onClick: function (e) {
                return null == x ? void 0 : x(e);
              },
              x: l,
              y: s,
              rx: p,
              ry: f,
              width: g,
              height: b,
              style: { strokeWidth: w, stroke: D },
            }),
            a.a.createElement(
              'text',
              {
                style: { textAnchor: 'middle' },
                className: o.text,
                onClick: function (e) {
                  return null == x ? void 0 : x(e);
                },
                x: l + g / 2,
                y: s + (b - b / 3),
              },
              r(e)
            )
          );
        },
        c = r(3),
        l = [' ', 'Enter'],
        u = function (e) {
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
                  l.filter(function (e) {
                    return e === a;
                  }).length > 0 && (e.preventDefault(), r());
              }
            },
          };
        },
        s = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            n = r.tabIndex,
            a = void 0 === n ? 0 : n,
            o = r.role,
            i = void 0 === o ? 'button' : o;
          return {
            role: i,
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
        d = function (e) {
          return 'datepicker-day-'.concat(e.getFullYear(), '-').concat(e.getMonth(), '-').concat(e.getDate());
        },
        f = function (e) {
          var t = e.startDate,
            r = Object(c.timeMonth)(t),
            n = new Date(t.getFullYear(), t.getMonth() + 1, 0),
            a = n.getDate(),
            o = (function (e) {
              for (var t = e.daysInMonth, r = e.startDate, n = [], a = 1; a <= t; )
                n.push(new Date(r.getFullYear(), r.getMonth(), a)), a++;
              return n;
            })({ daysInMonth: a, startDate: r }),
            i = new Date(r);
          i.setDate(1 - r.getDay());
          var l = Array(r.getDay()).map(function (e) {
              return new Date(i.getFullYear(), i.getMonth(), i.getDate() + e);
            }),
            u = new Date(t.getFullYear(), t.getMonth() + 1, 1);
          return (
            u.setDate(6 - n.getDay()),
            {
              startDate: t,
              firstOfMonth: r,
              totalDays: a,
              days: o,
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
        },
        y = function (e) {
          var t = e.days,
            r = e.cellWidth,
            n = e.cellHeight,
            a = e.daySpacing,
            o = e.offset,
            i = e.startDate,
            l = a,
            u = a + o;
          return t.map(function (e) {
            var t = (function (e) {
                var t = e.startDate,
                  r = e.date,
                  n = c.timeWeek.count(t, r),
                  a = r.getDate(),
                  o = r.getMonth(),
                  i = r.getFullYear();
                return {
                  currentColumn: r.getDay(),
                  year: i,
                  currentRow: n,
                  firstWeek: n,
                  month: o,
                  date: r,
                  day: a,
                  suggestedKey: d(r),
                };
              })({ startDate: i, date: e }),
              o = t.currentColumn,
              s = t.currentRow,
              f = t.firstWeek,
              y = t.year,
              p = t.month,
              h = t.date,
              g = t.day,
              m = t.suggestedKey;
            return {
              coordinates: { x: l + a * o + r * o, y: u + a * s + n * s },
              firstWeek: f,
              day: g,
              month: p,
              year: y,
              date: h,
              width: r,
              height: n,
              suggestedKey: m,
            };
          });
        };
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function h(e, t) {
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
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                m(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : h(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function m(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      function b(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return v(e);
          })(e) ||
          (function (e) {
            if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return v(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var w = function (e) {
          var t = e.currentDate,
            r = e.dayRadius,
            n = e.dayBorderWidth,
            o = e.dayBorderColor,
            c = e.todayBorderWidth,
            l = e.todayBorderRadius,
            s = e.todayBorderColor,
            h = e.width,
            m = e.height,
            v = e.daySpacing,
            w = e.offset,
            D = e.startDate,
            x = e.selection,
            O = e.setSelection,
            S = e.setShowPicker,
            j = e.isRange,
            k = e.autoclose,
            P = e.fixedSize,
            E = e.setCurrentDate,
            C = e.addBuffer,
            M = e.squares,
            A = f({ startDate: D }),
            B = A.totalDays,
            W = A.days,
            I = A.firstOfMonth,
            F = A.daysNextMonth,
            T = A.daysPrevMonth,
            R = new Date().setHours(0, 0, 0, 0),
            N = function (e) {
              var t;
              (t =
                j && 1 === x.length
                  ? [].concat(b(x), [e.getTime()]).sort(function (e, t) {
                      return e - t;
                    })
                  : [e.getTime()]),
                O(t),
                ((k && !j) || (k && j && t.length > 1)) &&
                  setTimeout(function () {
                    return S(!1);
                  }, k);
            },
            Y = P
              ? { cellHeight: P, cellWidth: P }
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
                  return { columns: 7, rows: c, cellHeight: i ? Math.min(l, u) : l, cellWidth: i ? Math.min(l, u) : u };
                })({ squares: M, totalDays: B, offset: w, daySpacing: v, width: h, height: m }),
            q = Y.cellHeight,
            H = Y.cellWidth,
            K = C ? [].concat(b(T), b(W), b(F)) : W,
            U = y({ startDate: (C && T[0]) || I, days: K, offset: w + 30, cellHeight: q, cellWidth: H, daySpacing: v }),
            G = (function (e) {
              e.cellHeight;
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
            })({ cellHeight: q, cellWidth: H, daySpacing: v });
          return a.a.createElement(
            'div',
            { className: 'd-flex justify-content-around' },
            a.a.createElement(
              'svg',
              p(
                { role: 'grid', 'aria-labelledby': 'id-dialog-label' },
                u({
                  navigation: function (e) {
                    var t = new Date(D);
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
                      var e = d(t),
                        r = document.getElementById(e);
                      r && (r.setAttribute('aria-selected', 'true'), r.focus());
                    }, 1);
                  },
                  exec: function () {
                    return N(t);
                  },
                  close: function () {
                    return S(!1);
                  },
                }),
                { width: h, height: m }
              ),
              G.map(function (e) {
                return a.a.createElement(
                  'text',
                  { className: 'text-gray-light small', height: 50, key: e.key, x: e.x + 13, y: e.y + 25 },
                  e.value
                );
              }),
              U.map(function (e) {
                var t = g({}, e);
                I.getMonth() !== t.date.getMonth() &&
                  (t.classes = { rect: 'text-white', text: 'text-secondary small' });
                var u = t.date.getTime();
                return (
                  (t.borderWidth = R === u ? c : n),
                  (t.borderColor = R === u ? s : o),
                  x.includes(u)
                    ? (t.classes = { rect: 'text-primary', text: 'text-white small' })
                    : u > x[0] && u < x[1] && (t.classes = { rect: 'text-info', text: 'text-white small' }),
                  (t.coordinates.rx = R === u ? l : r),
                  (t.coordinates.ry = R === u ? l : r),
                  (t.onClick = function () {
                    console.debug('You clicked ', t), N(t.date);
                  }),
                  a.a.createElement(i, p({ key: t.suggestedKey }, g({}, t)))
                );
              })
            )
          );
        },
        D = r(2);
      function x() {
        return (x =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var O = function (e) {
          var t = e.width,
            r = void 0 === t ? 220 : t,
            n = e.currentDate,
            o = e.setCurrentDate;
          return a.a.createElement(
            'svg',
            { className: 'datepicker-navigation', width: r, height: '25' },
            a.a.createElement(
              'g',
              null,
              a.a.createElement(
                'rect',
                x(
                  {
                    'aria-label': 'previous month',
                    className: 'text-white',
                    cursor: 'pointer',
                    x: 0,
                    width: 25,
                    height: 25,
                  },
                  s(function () {
                    o(new Date(n.getFullYear(), n.getMonth() - 1, 1));
                  })
                )
              ),
              a.a.createElement(
                D.BsChevronCompactLeft,
                x(
                  { 'aria-label': 'previous month', x: 2, width: 24, cursor: 'pointer' },
                  s(function () {
                    o(new Date(n.getFullYear(), n.getMonth() - 1, 1));
                  }),
                  { xlinkHref: 'bootstrap-icons.svg#chevron-left', className: 'text-primary' }
                )
              )
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement(
                'text',
                {
                  'aria-live': 'polite',
                  className: 'h6',
                  x: '50%',
                  y: '50%',
                  dominantBaseline: 'middle',
                  textAnchor: 'middle',
                },
                n.toLocaleString('default', { month: 'long', year: 'numeric' })
              )
            ),
            a.a.createElement(
              'g',
              null,
              a.a.createElement(
                'rect',
                x(
                  {
                    'aria-label': 'next month',
                    className: 'text-white',
                    cursor: 'pointer',
                    x: r - 20,
                    width: 25,
                    height: 25,
                  },
                  s(function () {
                    o(new Date(n.getFullYear(), n.getMonth() + 1, 1));
                  })
                )
              ),
              a.a.createElement(
                D.BsChevronCompactRight,
                x(
                  { 'aria-label': 'next month', width: 24, x: r - 20, cursor: 'pointer' },
                  s(function () {
                    o(new Date(n.getFullYear(), n.getMonth() + 1, 1));
                  }),
                  { className: 'text-primary' }
                )
              )
            )
          );
        },
        S = function (e) {
          var t = e.width,
            r = e.height,
            n = e.daySpacing,
            o = e.offset,
            i = e.currentDate,
            c = e.setCurrentDate,
            l = e.selection,
            u = e.setSelection,
            s = e.setShowPicker,
            d = e.isRange,
            f = e.autoclose,
            y = e.dayRadius,
            p = e.dayBorderWidth,
            h = e.dayBorderColor,
            g = e.todayBorderWidth,
            m = e.todayBorderRadius,
            b = e.todayBorderColor,
            v = e.fixedSize,
            D = e.addBuffer,
            x = e.squares;
          return a.a.createElement(
            'div',
            { className: 'd-flex justify-content-between' },
            a.a.createElement(
              'div',
              {
                role: 'dialog',
                'aria-modal': 'true',
                'aria-labelledby': 'id-dialog-label',
                'aria-live': 'polite',
                className: 'shadow border rounded p-3',
              },
              a.a.createElement(O, { width: t, currentDate: i, setCurrentDate: c }),
              a.a.createElement(w, {
                currentDate: i,
                setCurrentDate: c,
                fixedSize: v,
                dayRadius: y,
                dayBorderWidth: p,
                dayBorderColor: h,
                todayBorderWidth: g,
                todayBorderRadius: m,
                todayBorderColor: b,
                width: t,
                height: r,
                selection: l,
                setSelection: u,
                setShowPicker: s,
                daySpacing: n,
                offset: o,
                startDate: i,
                isRange: d,
                autoclose: f,
                addBuffer: D,
                squares: x,
              })
            )
          );
        },
        j = r(4),
        k = r.n(j);
      function P() {
        return (P =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function E(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return A(e);
          })(e) ||
          (function (e) {
            if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
              return Array.from(e);
          })(e) ||
          M(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function C(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null == r) return;
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
          })(e, t) ||
          M(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function M(e, t) {
        if (e) {
          if ('string' == typeof e) return A(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? A(e, t)
              : void 0
          );
        }
      }
      function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var B = function (e) {
          var t = e.setShowPicker,
            r = e.showPicker,
            i = e.isRange,
            c = e.setSelection,
            l = e.setCurrentDate,
            u = e.selection,
            d = C(Object(n.useState)(!1), 2),
            f = d[0],
            y = d[1],
            p = '([0-1]{1}[0-9]{1}/[0-3]{1}[0-9]{1}/[0-9]{2})',
            h = i ? ''.concat(p, '-').concat(p) : p,
            g = i ? ''.concat('mm/dd/yy', '-').concat('mm/dd/yy') : 'mm/dd/yy',
            m = function (e) {
              var t = e.currentTarget;
              if (!1 === t.checkValidity()) e.preventDefault(), e.stopPropagation();
              else {
                var r;
                if (i) {
                  var n = E(
                    t.value.matchAll(
                      /([0-1]{1}[0-9]{1}\/[0-3]{1}[0-9]{1}\/[0-9]{2})-([0-1]{1}[0-9]{1}\/[0-3]{1}[0-9]{1}\/[0-9]{2})/g
                    )
                  );
                  r = [new Date(n[0][1]).getTime(), new Date(n[0][2]).getTime()];
                } else {
                  r = [new Date(t.value).getTime()];
                }
                l(new Date(r[0])), c(r);
              }
              y(!0);
            },
            b = r ? a.a.createElement(D.BsX, null) : a.a.createElement(D.BsCalendar, null),
            v = u
              .map(function (e) {
                return new Date(e);
              })
              .map(function (e) {
                return e.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: '2-digit' });
              })
              .join('-');
          return a.a.createElement(
            o.Form,
            { noValidate: !0, validated: f, onSubmit: m },
            a.a.createElement(
              o.Form.Group,
              { className: 'datepicker-trigger', as: o.Col, controlId: 'validationCustomUsername' },
              a.a.createElement(
                o.InputGroup,
                { className: k()('input-group-unstyled', { 'input-group-active': r }) },
                a.a.createElement(o.Form.Control, {
                  key: v,
                  defaultValue: v,
                  onBlur: m,
                  pattern: h,
                  type: 'text',
                  placeholder: g,
                  'aria-describedby': 'inputGroupPrepend',
                  required: !0,
                }),
                a.a.createElement(
                  o.InputGroup.Prepend,
                  null,
                  a.a.createElement(
                    o.InputGroup.Text,
                    P(
                      { className: 'h-100', 'aria-label': 'Choose Date, selected date is '.concat(v) },
                      s(function () {
                        return t(!r);
                      }),
                      { id: 'inputGroupPrepend' }
                    ),
                    b
                  )
                ),
                a.a.createElement(o.Form.Control.Feedback, { type: 'invalid' }, 'Invalid date')
              )
            )
          );
        },
        W = {
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
      function I(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null == r) return;
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
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return F(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return F(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function F(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function T(e, t) {
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
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? T(Object(r), !0).forEach(function (t) {
                N(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : T(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function N(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = r),
          e
        );
      }
      var Y = function (e) {
        var t = R(R({}, W), e),
          r = I(Object(n.useState)(e.startDate || new Date()), 2),
          i = r[0],
          c = r[1],
          l = I(Object(n.useState)([]), 2),
          u = l[0],
          s = l[1],
          f = I(Object(n.useState)(!1), 2),
          y = f[0],
          p = f[1],
          h = t.isRange,
          g = Object(n.useRef)(null),
          m = Object(n.useCallback)(
            function (e) {
              p(e),
                e &&
                  setTimeout(function () {
                    var e = d(i),
                      t = document.getElementById(e);
                    t && (t.setAttribute('aria-selected', 'true'), t.focus());
                  }, 1);
            },
            [y, i]
          );
        return a.a.createElement(
          'div',
          { ref: g, className: 'datepicker' },
          a.a.createElement(B, {
            selection: u,
            showPicker: y,
            setShowPicker: m,
            isRange: h,
            setSelection: s,
            setCurrentDate: c,
          }),
          a.a.createElement(
            o.Overlay,
            { target: g, show: y, placement: 'bottom', container: g.current },
            a.a.createElement(
              S,
              R(R({}, t), {
                showPicker: y,
                currentDate: i,
                setCurrentDate: c,
                selection: u,
                setSelection: s,
                setShowPicker: m,
              })
            )
          )
        );
      };
    },
  ]);
});
