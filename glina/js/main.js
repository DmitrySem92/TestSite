/* =========================================================
   ГЛИНА — данные каталога, иконки и логика корзины
   ========================================================= */

const CATEGORIES = {
  mug:    { label: 'Кружки',   plural: 'Кружки' },
  bowl:   { label: 'Миски',    plural: 'Миски и тарелки' },
  plate:  { label: 'Тарелки',  plural: 'Миски и тарелки' },
  vase:   { label: 'Вазы',     plural: 'Вазы' },
  teapot: { label: 'Чайники',  plural: 'Чайники' },
  set:    { label: 'Наборы',   plural: 'Наборы и декор' },
  decor:  { label: 'Декор',    plural: 'Наборы и декор' },
};

const FILTERS = [
  { key: 'all',    label: 'Всё' },
  { key: 'mug',    label: 'Кружки' },
  { key: 'bowlplate', label: 'Миски и тарелки' },
  { key: 'vase',   label: 'Вазы' },
  { key: 'teapot', label: 'Чайники' },
  { key: 'setdecor', label: 'Наборы и декор' },
];

const PRODUCTS = [
  { id: 1,  name: 'Кружка «Утро»',            cat: 'mug',    accent: 'clay', price: 1200, sku: 'GL-MG-001', vol: '300 мл', desc: 'Плотные стенки держат тепло дольше обычного — для медленного утреннего кофе.' },
  { id: 2,  name: 'Кружка «Полынь»',          cat: 'mug',    accent: 'sage', price: 1200, sku: 'GL-MG-002', vol: '300 мл', desc: 'Глазурь цвета полыни, лёгкая неровность края — след ручной вытяжки.' },
  { id: 3,  name: 'Кружка «Мёд»',             cat: 'mug',    accent: 'gold', price: 1300, sku: 'GL-MG-003', vol: '320 мл', desc: 'Тёплый медовый глянец, широкое горлышко — удобно для чая с травами.' },
  { id: 4,  name: 'Кружка «Ночь»',            cat: 'mug',    accent: 'ink',  price: 1300, sku: 'GL-MG-004', vol: '300 мл', desc: 'Глубокая матовая глазурь почти без блика — для тех, кто любит контраст.' },
  { id: 5,  name: 'Миска «Тараса» большая',   cat: 'bowl',   accent: 'clay', price: 1800, sku: 'GL-BW-005', vol: '900 мл', desc: 'Широкая миска для салатов и общего стола, устойчивое плоское дно.' },
  { id: 6,  name: 'Миска «Тараса» малая',     cat: 'bowl',   accent: 'sage', price: 1400, sku: 'GL-BW-006', vol: '450 мл', desc: 'Компактная версия — под соусы, орехи и утренние каши.' },
  { id: 7,  name: 'Миска для супа «Уют»',     cat: 'bowl',   accent: 'gold', price: 1600, sku: 'GL-BW-007', vol: '600 мл', desc: 'Глубокие борта держат тепло супа, узкое основание удобно держать в руке.' },
  { id: 8,  name: 'Тарелка обеденная «Поле»', cat: 'plate',  accent: 'clay', price: 1500, sku: 'GL-PL-008', vol: 'Ø 26 см', desc: 'Слегка неровный край и лёгкий рельеф — тарелка, которую видно на столе.' },
  { id: 9,  name: 'Тарелка закусочная «Поле»',cat: 'plate',  accent: 'sage', price: 1100, sku: 'GL-PL-009', vol: 'Ø 20 см', desc: 'Меньшая тарелка того же набора — для подачи закусок и десертов.' },
  { id: 10, name: 'Тарелка сервировочная «Луна»', cat: 'plate', accent: 'gold', price: 2200, sku: 'GL-PL-010', vol: 'Ø 32 см', desc: 'Крупная плоская тарелка для подачи — центр стола на семейном ужине.' },
  { id: 11, name: 'Ваза «Стебель» высокая',   cat: 'vase',   accent: 'clay', price: 3200, sku: 'GL-VS-011', vol: 'h 32 см', desc: 'Узкое горлышко держит один-два стебля — для минималистичной композиции.' },
  { id: 12, name: 'Ваза «Стебель» низкая',    cat: 'vase',   accent: 'sage', price: 2400, sku: 'GL-VS-012', vol: 'h 18 см', desc: 'Та же форма в укороченной пропорции — под низкие букеты и веточки.' },
  { id: 13, name: 'Ваза-кубышка «Тихая»',     cat: 'vase',   accent: 'gold', price: 2800, sku: 'GL-VS-013', vol: 'h 22 см', desc: 'Округлый корпус, толстые стенки — самостоятельный объект без цветов.' },
  { id: 14, name: 'Чайник заварочный «Дымка»',cat: 'teapot', accent: 'clay', price: 3600, sku: 'GL-TP-014', vol: '700 мл', desc: 'Керамическое ситечко в носике, плотно прилегающая крышка.' },
  { id: 15, name: 'Чайник «Дымка» мини',      cat: 'teapot', accent: 'sage', price: 2900, sku: 'GL-TP-015', vol: '400 мл', desc: 'Компактный заварочный чайник на одну-две чашки.' },
  { id: 16, name: 'Набор «Двое»',             cat: 'set',    accent: 'clay', price: 2600, sku: 'GL-ST-016', vol: '2 кружки + 2 блюдца', desc: 'Две кружки «Утро» с блюдцами в одной подарочной упаковке.' },
  { id: 17, name: 'Набор «Завтрак»',          cat: 'set',    accent: 'sage', price: 3400, sku: 'GL-ST-017', vol: 'тарелка + миска + кружка', desc: 'Тарелка, миска и кружка одной глазури — готовый сервиз на одну персону.' },
  { id: 18, name: 'Набор «Чайная церемония»', cat: 'set',    accent: 'gold', price: 5200, sku: 'GL-ST-018', vol: 'чайник + 2 чашки', desc: 'Чайник «Дымка» мини и две чашки без ручек — для медленного чаепития.' },
  { id: 19, name: 'Подсвечник «Огарок»',      cat: 'decor',  accent: 'clay', price: 900,  sku: 'GL-DC-019', vol: 'h 8 см',  desc: 'Тяжёлое основание, свеча-столбик держится плотно.' },
  { id: 20, name: 'Вазочка-плошка «Плошка»',  cat: 'decor',  accent: 'sage', price: 1700, sku: 'GL-DC-020', vol: 'Ø 14 см', desc: 'Низкая плошка для суккулентов или одной срезанной ветки.' },
];

const ACCENTS = {
  clay: 'var(--clay)',
  sage: 'var(--sage)',
  gold: 'var(--gold)',
  ink:  'var(--ink)',
};

/* ---------- SVG line-art vessels ---------- */
function vesselSvg(cat, accentKey, size){
  const c = ACCENTS[accentKey] || ACCENTS.clay;
  const sw = 2.4;
  const common = `fill="none" stroke="${c}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"`;
  let inner = '';
  switch(cat){
    case 'mug':
      inner = `
        <path ${common} d="M30 34 Q29 78 34 92 Q50 100 66 92 Q71 78 70 34 Z"/>
        <path ${common} d="M70 44 Q88 46 87 62 Q86 76 70 78"/>
        <ellipse ${common} cx="50" cy="34" rx="20" ry="6"/>`;
      break;
    case 'bowl':
      inner = `
        <path ${common} d="M18 46 Q20 82 50 84 Q80 82 82 46"/>
        <ellipse ${common} cx="50" cy="46" rx="32" ry="8"/>
        <path ${common} d="M34 84 Q50 90 66 84" opacity="0.5"/>`;
      break;
    case 'plate':
      inner = `
        <ellipse ${common} cx="50" cy="52" rx="40" ry="13"/>
        <ellipse ${common} cx="50" cy="50" rx="24" ry="7.5" opacity="0.7"/>`;
      break;
    case 'vase':
      inner = `
        <path ${common} d="M40 14 Q38 22 41 27 Q24 40 25 62 Q26 88 50 90 Q74 88 75 62 Q76 40 59 27 Q62 22 60 14 Z"/>
        <ellipse ${common} cx="50" cy="14" rx="10" ry="4"/>`;
      break;
    case 'teapot':
      inner = `
        <path ${common} d="M22 54 Q20 82 50 84 Q80 82 78 54 Q80 44 66 40 Q50 36 34 40 Q20 44 22 54 Z"/>
        <path ${common} d="M12 48 Q4 50 6 60 Q8 68 20 66"/>
        <path ${common} d="M78 50 Q94 44 92 34"/>
        <ellipse ${common} cx="50" cy="36" rx="10" ry="4"/>
        <circle cx="50" cy="30" r="2.6" fill="${c}" stroke="none"/>`;
      break;
    case 'set':
      inner = `
        <path ${common} d="M20 40 Q19 68 23 78 Q34 84 45 78 Q49 68 48 40 Z"/>
        <ellipse ${common} cx="34" cy="40" rx="14" ry="4.5"/>
        <path ${common} d="M48 46 Q58 47 57 58 Q56 66 48 68" opacity="0.8"/>
        <path ${common} d="M55 44 Q54 70 58 82 Q70 87 82 82 Q86 70 85 44 Z"/>
        <ellipse ${common} cx="70" cy="44" rx="15" ry="4.5"/>`;
      break;
    case 'decor':
    default:
      inner = `
        <path ${common} d="M38 30 Q30 60 32 80 Q50 90 68 80 Q70 60 62 30 Z"/>
        <ellipse ${common} cx="50" cy="30" rx="12" ry="4"/>
        <path ${common} d="M50 10 Q46 18 50 24 Q54 18 50 10 Z" opacity="0.7"/>`;
  }
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="${size||100}" height="${size||100}" aria-hidden="true">${inner}</svg>`;
}

function checkIcon(){
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-6"/></svg>`;
}

function emptyIcon(){
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="50" cy="52" rx="34" ry="10"/><ellipse cx="50" cy="50" rx="20" ry="6" opacity=".5"/></svg>`;
}

/* ---------- helpers ---------- */
function money(n){ return n.toLocaleString('ru-RU') + ' ₽'; }
function findProduct(id){ return PRODUCTS.find(p => p.id === Number(id)); }
function filterKeyForProduct(p){
  if(p.cat==='bowl'||p.cat==='plate') return 'bowlplate';
  if(p.cat==='set'||p.cat==='decor') return 'setdecor';
  return p.cat;
}

/* ---------- cart (localStorage) ---------- */
const CART_KEY = 'glina_cart_v1';
function getCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch(e){ return []; }
}
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartCount(); }
function addToCart(id, qty){
  qty = qty || 1;
  const cart = getCart();
  const line = cart.find(l => l.id === Number(id));
  if(line){ line.qty += qty; } else { cart.push({ id: Number(id), qty }); }
  saveCart(cart);
  showToast('Добавлено в корзину');
}
function removeFromCart(id){
  saveCart(getCart().filter(l => l.id !== Number(id)));
  if(typeof renderCartPage === 'function') renderCartPage();
}
function setQty(id, qty){
  const cart = getCart();
  const line = cart.find(l => l.id === Number(id));
  if(!line) return;
  line.qty = Math.max(1, qty);
  saveCart(cart);
  if(typeof renderCartPage === 'function') renderCartPage();
}
function cartCount(){ return getCart().reduce((s,l) => s + l.qty, 0); }
function updateCartCount(){
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = cartCount());
}

/* ---------- toast ---------- */
let toastTimer;
function showToast(msg){
  let t = document.querySelector('.toast');
  if(!t){
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `${checkIcon().replace('<svg', '<svg style="width:16px;height:16px"')} <span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- product card renderer ---------- */
function productCardHtml(p){
  return `
    <article class="product-card">
      <a href="product.html?id=${p.id}" class="product-media" aria-label="${p.name}">
        ${p.id % 7 === 0 ? '<span class="product-tag">Новинка</span>' : ''}
        ${vesselSvg(p.cat, p.accent)}
      </a>
      <div class="product-body">
        <span class="product-cat">${CATEGORIES[p.cat].label}</span>
        <h3 class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
        <p class="product-desc">${p.desc}</p>
        <div class="product-foot">
          <span class="product-price">${money(p.price)}<br><small>${p.vol}</small></span>
          <button class="add-btn" title="В корзину" onclick="addToCart(${p.id});event.preventDefault();">+</button>
        </div>
      </div>
    </article>`;
}

/* ---------- quick order modal (имитация лида в Битрикс24 CRM) ---------- */
function initQuickOrderModal(){
  const overlay = document.querySelector('.modal-overlay');
  if(!overlay) return;
  document.querySelectorAll('[data-open-modal]').forEach(btn=>{
    btn.addEventListener('click', ()=> overlay.classList.add('open'));
  });
  overlay.querySelectorAll('[data-close-modal]').forEach(btn=>{
    btn.addEventListener('click', ()=> overlay.classList.remove('open'));
  });
  overlay.addEventListener('click', (e)=>{ if(e.target === overlay) overlay.classList.remove('open'); });

  const form = overlay.querySelector('form');
  const successBox = overlay.querySelector('.modal-success');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      // В боевой версии: POST на Bitrix24 REST-вебхук (crm.lead.add)
      // с полями TITLE, NAME, PHONE и меткой источника utm_source.
      form.style.display = 'none';
      successBox.classList.add('show');
      setTimeout(()=>{
        overlay.classList.remove('open');
        form.reset();
        form.style.display = '';
        successBox.classList.remove('show');
      }, 2200);
    });
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount();
  initQuickOrderModal();
});
