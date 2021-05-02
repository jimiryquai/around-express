(this.webpackJsonparound_us_react = this.webpackJsonparound_us_react || []).push([[0], {
  16(e, t, a) {
    a.r(t); const n = a(1); const r = a.n(n); const c = a(7); const i = a.n(c); const o = (a(6), a(10)); const s = a(2); const u = `${a.p}static/media/logo.1a2d9102.svg`; const l = a(0); const d = function () { return Object(l.jsx)('header', { className: 'header', children: Object(l.jsx)('img', { src: u, alt: 'logo', className: 'logo' }) }); }; const b = r.a.createContext({ name: 'Harry', about: 'Wizard' }); const m = function (e) {
      const t = r.a.useContext(b); const a = e.card.owner._id === t._id; const n = e.card.likes.some(((e) => e._id === t._id)); const c = 'card__delete-button '.concat(a ? '' : 'card__delete-button_hidden'); const i = 'card__like-button '.concat(n ? 'card__like-button_active' : ''); const o = e.card.likes.length; return Object(l.jsxs)('li', {
        className: 'card',
        children: [Object(l.jsx)('button', { onClick(t) { t.stopPropagation(), t.preventDefault(), e.onCardDelete(e.card); }, className: c, title: 'button that deletes card' }), Object(l.jsx)('img', {
          onClick() { e.onCardClick(e.card); }, src: e.card.link, alt: e.card.name, className: 'card__image',
        }), Object(l.jsxs)('div', { className: 'card__content', children: [Object(l.jsx)('div', { className: 'card__content_place_left', children: Object(l.jsx)('h3', { className: 'card__title', children: e.card.name }) }), Object(l.jsxs)('div', { className: 'card__content_place_right', children: [Object(l.jsx)('button', { onClick(t) { t.stopPropagation(), t.preventDefault(), e.onCardLike(e.card); }, className: i, title: 'button that likes card' }), Object(l.jsx)('p', { className: 'card__likes', children: o })] })] })],
      });
    }; const j = function (e) {
      const t = r.a.useContext(b); return Object(l.jsxs)('main', {
        className: 'main',
        children: [Object(l.jsxs)('section', {
          className: 'profile',
          children: [Object(l.jsxs)('div', {
            className: 'avatar',
            children: [Object(l.jsx)('img', {
              src: t.avatar, alt: t.name, className: 'avatar__img', id: 'avatar',
            }), Object(l.jsx)('button', { className: 'button button_avatar', title: 'button that launches avatar editing form', onClick: e.onEditAvatar })],
          }), Object(l.jsxs)('div', { className: 'profile__info', children: [Object(l.jsx)('h1', { className: 'profile__name', children: t.name }), Object(l.jsx)('button', { className: 'button button_edit', title: 'button that launches profile editing form', onClick: e.onEditProfile }), Object(l.jsx)('p', { className: 'profile__job', children: t.about })] }), Object(l.jsx)('button', { className: 'button button_add', title: 'button that launches card adding form', onClick: e.onAddPlace })],
        }), Object(l.jsx)('section', {
          className: 'gallery',
          children: Object(l.jsx)('ul', {
            className: 'cards',
            children: e.cards.map(((t, a) => Object(l.jsx)(m, {
              card: t, onCardClick: e.onCardClick, onCardLike: e.onCardLike, onCardDelete: e.onCardDelete,
            }, a))),
          }),
        })],
      });
    }; const p = function () { return Object(l.jsx)('footer', { className: 'footer', children: Object(l.jsx)('p', { className: 'footer__copyright', children: '\xa9 James Ryan 2021' }) }); }; const f = function (e) {
      const t = e.isOpen ? 'popup_opened' : ''; const a = e.isSubmitButtonActive ? '' : 'button_inactive'; return Object(l.jsx)('div', {
        className: 'popup popup_type_'.concat(e.name, ' ').concat(t),
        children: Object(l.jsxs)('div', {
          className: 'popup__modal popup__modal_type_form popup__modal_type_'.concat(e.name),
          children: [Object(l.jsx)('button', { className: 'popup__close', title: 'button that closes form', onClick: e.onClose }), Object(l.jsx)('h2', { className: 'content-title', children: e.title }), Object(l.jsxs)('form', {
            className: 'form',
            name: e.name,
            onSubmit: e.onSubmit,
            noValidate: !0,
            children: [e.children, Object(l.jsx)('button', {
              className: 'button button_submit '.concat(a), type: 'submit', title: 'button that submits form', children: e.submitText,
            })],
          })],
        }),
      });
    }; const _ = function (e) {
      const t = Object(n.useState)(''); const a = Object(s.a)(t, 2); const c = a[0]; const i = a[1]; const o = Object(n.useState)(''); const u = Object(s.a)(o, 2); const d = u[0]; const m = u[1]; const j = Object(n.useState)(''); const p = Object(s.a)(j, 2); const _ = p[0]; const h = p[1]; const v = Object(n.useState)(''); const O = Object(s.a)(v, 2); const x = O[0]; const g = O[1]; const C = _ ? 'form__input-error_active' : ''; const N = x ? 'form__input-error_active' : ''; const k = !C && !N; const y = r.a.useContext(b); return r.a.useEffect((() => { i(y.name), m(y.about); }), [y]), Object(l.jsx)(f, {
        name: 'profile',
        title: 'Edit profile',
        isOpen: e.isOpen,
        onClose: e.onClose,
        onSubmit(t) { t.preventDefault(), e.onUpdateUser({ name: c, about: d }); },
        isSubmitButtonActive: k,
        submitText: e.submitText,
        children: Object(l.jsxs)('fieldset', {
          className: 'form__set',
          children: [Object(l.jsxs)('label', {
            className: 'form__label',
            htmlFor: 'name-input',
            children: [Object(l.jsx)('input', {
              type: 'text', value: c, onChange(e) { i(e.target.value); }, className: 'form__input form__input_name', id: 'name-input', name: 'name-input', placeholder: 'Name', required: !0, minLength: '2', maxLength: '40', pattern: '[A-Za-z -]{2,}', 'aria-describedby': 'name-input-error', onInput(e) { e.target.validity.valid ? h(null) : h(e.target.validationMessage); },
            }), Object(l.jsx)('span', { className: 'form__input-error '.concat(C), id: 'name-input-error', children: _ })],
          }), Object(l.jsxs)('label', {
            className: 'form__label',
            htmlFor: 'job-input',
            children: [Object(l.jsx)('input', {
              type: 'text', value: d, onChange(e) { m(e.target.value); }, className: 'form__input form__input_job', id: 'job-input', name: 'job-input', placeholder: 'About Me', required: !0, minLength: '2', maxLength: '200', 'aria-describedby': 'job-input-error', onInput(e) { e.target.validity.valid ? g(null) : g(e.target.validationMessage); },
            }), Object(l.jsx)('span', { className: 'form__input-error '.concat(N), id: 'job-input-error', children: x })],
          })],
        }),
      });
    }; const h = function (e) {
      const t = Object(n.useState)(''); const a = Object(s.a)(t, 2); const r = a[0]; const c = a[1]; const i = Object(n.useState)(''); const o = Object(s.a)(i, 2); const u = o[0]; const d = o[1]; const b = Object(n.useState)(''); const m = Object(s.a)(b, 2); const j = m[0]; const p = m[1]; const _ = Object(n.useState)(''); const h = Object(s.a)(_, 2); const v = h[0]; const O = h[1]; const x = j ? 'form__input-error_active' : ''; const g = v ? 'form__input-error_active' : ''; const C = !x && !g; return Object(l.jsx)(f, {
        name: 'add-place',
        title: 'Add place',
        isOpen: e.isOpen,
        onClose: e.onClose,
        onSubmit(t) { t.preventDefault(), e.onAddPlace({ name: r, link: u }); },
        isSubmitButtonActive: C,
        submitText: e.submitText,
        children: Object(l.jsxs)('fieldset', {
          className: 'form__set',
          children: [Object(l.jsxs)('label', {
            className: 'form__label',
            htmlFor: 'title-input',
            children: [Object(l.jsx)('input', {
              type: 'text', value: r, onChange(e) { c(e.target.value); }, className: 'form__input form__input_title', id: 'title-input', name: 'title-input', placeholder: 'Title', required: !0, minLength: '1', maxLength: '30', 'aria-describedby': 'title-input-error', onInput(e) { e.target.validity.valid ? p('') : p(e.target.validationMessage); },
            }), Object(l.jsx)('span', { className: 'form__input-error '.concat(x), id: 'title-input-error', children: j })],
          }), Object(l.jsxs)('label', {
            className: 'form__label',
            htmlFor: 'url-input',
            children: [Object(l.jsx)('input', {
              type: 'url', value: u, onChange(e) { d(e.target.value); }, className: 'form__input form__input_url', id: 'url-input', name: 'url-input', placeholder: 'Image URL', required: !0, 'aria-describedby': 'url-input-error', onInput(e) { e.target.validity.valid ? O(null) : O(e.target.validationMessage); },
            }), Object(l.jsx)('span', { className: 'form__input-error '.concat(g), id: 'url-input-error', children: v })],
          })],
        }),
      });
    }; const v = function (e) {
      const t = r.a.useRef(0); const a = Object(n.useState)(''); const c = Object(s.a)(a, 2); const i = c[0]; const o = c[1]; const u = i ? 'form__input-error_active' : ''; const d = !u; return Object(l.jsx)(f, {
        name: 'avatar',
        title: 'Edit avatar',
        isOpen: e.isOpen,
        onClose: e.onClose,
        onSubmit(a) { a.preventDefault(), e.onUpdateAvatar({ avatar: t.current.value }); },
        isSubmitButtonActive: d,
        submitText: e.submitText,
        children: Object(l.jsxs)('label', {
          className: 'form__label',
          htmlFor: 'avatar-input',
          children: [Object(l.jsx)('input', {
            type: 'url', ref: t, className: 'form__input form__input_avatar', id: 'avatar-input', name: 'avatar-input', placeholder: 'Avatar URL', 'aria-describedby': 'avatar-input-error', required: !0, onInput(e) { e.target.validity.valid ? o(null) : o(e.target.validationMessage); },
          }), Object(l.jsx)('span', { className: 'form__input-error '.concat(u), id: 'avatar-input-error', children: i })],
        }),
      });
    }; const O = function (e) { return Object(l.jsx)('div', { className: 'popup popup_type_image '.concat(e.card ? 'popup_opened' : ''), children: Object(l.jsxs)('div', { className: 'popup__modal popup__modal_type_image', children: [Object(l.jsx)('button', { className: 'popup__close', title: 'button that closes form', onClick: e.onClose }), Object(l.jsxs)('figure', { className: 'popup__figure', children: [Object(l.jsx)('img', { src: e.card && e.card.link, alt: e.card && e.card.name, className: 'popup__image' }), Object(l.jsx)('figcaption', { className: 'popup__caption', children: e.card && e.card.name })] })] }) }); }; const x = a(8); const g = a(9); const C = new (function () { function e(t) { const a = t.baseUrl; const n = t.headers; Object(x.a)(this, e), this._baseUrl = a, this._headers = n; } return Object(g.a)(e, [{ key: 'getCardList', value() { return fetch(''.concat(this._baseUrl, '/cards'), { headers: this._headers }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'getUserInfo', value() { return fetch(''.concat(this._baseUrl, '/users/me'), { headers: this._headers }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'getAppInfo', value() { return Promise.all([this.getCardList(), this.getUserInfo()]); } }, { key: 'addCard', value(e) { const t = e.name; const a = e.link; return fetch(''.concat(this._baseUrl, '/cards'), { headers: this._headers, method: 'POST', body: JSON.stringify({ name: t, link: a }) }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'removeCard', value(e) { return fetch(''.concat(this._baseUrl, '/cards/') + e, { headers: this._headers, method: 'DELETE' }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'changeCardLikeStatus', value(e, t) { return fetch(''.concat(this._baseUrl, '/cards/likes/') + e, { headers: this._headers, method: t ? 'PUT' : 'DELETE' }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'setUserInfo', value(e) { const t = e.name; const a = e.about; return fetch(''.concat(this._baseUrl, '/users/me'), { headers: this._headers, method: 'PATCH', body: JSON.stringify({ name: t, about: a }) }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'setUserAvatar', value(e) { const t = e.avatar; return fetch(''.concat(this._baseUrl, '/users/me/avatar'), { headers: this._headers, method: 'PATCH', body: JSON.stringify({ avatar: t }) }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }]), e; }())({ baseUrl: 'https://around.nomoreparties.co/v1/group-9', headers: { authorization: '68927198-85ad-496d-8f9c-4cee8f16e3cd', 'Content-Type': 'application/json' } }); const N = function (e) {
      return Object(l.jsx)(f, {
        name: 'delete', title: 'Are you sure?', isOpen: e.isOpen, isSubmitButtonActive: !0, onClose: e.onClose, onSubmit(t) { t.preventDefault(), e.onConfirmDelete(e.card); }, submitText: e.submitText,
      });
    }; const k = (a.p, 'Save'); const y = 'Saving...'; const S = function () {
      const e = r.a.useState(!1); const t = Object(s.a)(e, 2); const a = t[0]; const c = t[1]; const i = r.a.useState(!1); const u = Object(s.a)(i, 2); const m = u[0]; const f = u[1]; const x = r.a.useState(!1); const g = Object(s.a)(x, 2); const S = g[0]; const E = g[1]; const L = Object(n.useState)(null); const U = Object(s.a)(L, 2); const A = U[0]; const P = U[1]; const T = Object(n.useState)({}); const D = Object(s.a)(T, 2); const w = D[0]; const I = D[1]; const F = Object(n.useState)([]); const B = Object(s.a)(F, 2); const M = B[0]; const J = B[1]; const q = Object(n.useState)(!1); const R = Object(s.a)(q, 2); const z = R[0]; const H = R[1]; const V = Object(n.useState)(null); const W = Object(s.a)(V, 2); const Z = W[0]; const G = W[1]; const K = Object(n.useState)(''); const Q = Object(s.a)(K, 2); const X = Q[0]; const Y = Q[1]; function $(e) { e.key === 'Escape' && ee(); } function ee() { c(!1), f(!1), E(!1), P(null), H(!1), window.removeEventListener('keyup', $); } return r.a.useEffect((() => { C.getAppInfo().then(((e) => { const t = Object(s.a)(e, 2); const a = t[0]; const n = t[1]; I(n); const r = []; a.forEach(((e) => { r.push(e); })), J(r); })).catch(((e) => { console.log(e); })); }), []), Object(l.jsx)('div', {
        className: 'page',
        children: Object(l.jsxs)(b.Provider, {
          value: w,
          children: [Object(l.jsx)(d, {}), Object(l.jsx)(j, {
            onEditProfile() { Y(k), f(!0), window.addEventListener('keyup', $); }, onAddPlace() { Y(k), E(!0), window.addEventListener('keyup', $); }, onEditAvatar() { Y(k), c(!0), window.addEventListener('keyup', $); }, onCardClick(e) { P(e), window.addEventListener('keyup', $); }, onCardLike(e) { const t = e.likes.some(((e) => e._id === w._id)); C.changeCardLikeStatus(e._id, !t).then(((t) => { const a = M.map(((a) => (a._id === e._id ? t : a))); J(a); })).catch(((e) => { console.log(e); })); }, onCardDelete(e) { G(e), Y('Delete'), H(!0), window.addEventListener('keyup', $); }, cards: M,
          }), Object(l.jsx)(p, {}), Object(l.jsx)(_, {
            isOpen: m, onClose: ee, onUpdateUser(e) { const t = e.name; const a = e.about; Y(y), C.setUserInfo({ name: t, about: a }).then(((e) => { I(e), f(!1); })).catch(((e) => { console.log(e); })); }, submitText: X,
          }), Object(l.jsx)(h, {
            isOpen: S, onClose: ee, onAddPlace(e) { const t = e.name; const a = e.link; Y(y), C.addCard({ name: t, link: a }).then(((e) => { J([e].concat(Object(o.a)(M))), E(!1); })).catch(((e) => { console.log(e); })); }, submitText: X,
          }), Object(l.jsx)(N, {
            isOpen: z, onClose: ee, onConfirmDelete(e) { Y('Deleting...'), C.removeCard(e._id).then((() => { const t = M.filter(((t) => t._id !== e._id)); J(t), H(!1); })).catch(((e) => { console.log(e); })); }, card: Z, submitText: X,
          }), Object(l.jsx)(v, { isOpen: a, onClose: ee, onUpdateAvatar(e) { const t = e.avatar; Y(y), C.setUserAvatar({ avatar: t }).then(((e) => { I(e), c(!1); })).catch(((e) => { console.log(e); })); } }), Object(l.jsx)(O, { card: A, onClose: ee })],
        }),
      });
    }; const E = function (e) { e && e instanceof Function && a.e(3).then(a.bind(null, 17)).then(((t) => { const a = t.getCLS; const n = t.getFID; const r = t.getFCP; const c = t.getLCP; const i = t.getTTFB; a(e), n(e), r(e), c(e), i(e); })); }; i.a.render(Object(l.jsx)(r.a.StrictMode, { children: Object(l.jsx)(S, {}) }), document.getElementById('root')), E();
  },
  6(e, t, a) {},
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.1a5d4e24.chunk.js.map
