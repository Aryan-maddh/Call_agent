import { useState } from 'react';
import {
  TrendingUp, CheckCircle2, Info,
  Mail, Eye, MoreVertical,
  ChevronDown, ChevronLeft, ChevronRight,
} from 'lucide-react';
import { invoices } from '../../data/mockData';

/* ─── column proportions (mirror Figma CSS pixel positions) ─────────────
   Container inner = 952 px
   ID  137 / 952 = 14.4%   Status 176 = 18.5%   Total 201 = 21.1%
   Date 249 = 26.1%        Actions 189 = 19.9%
─────────────────────────────────────────────────────────────────────── */
const COL: Record<string, string> = {
  id:      'w-[14%]',
  status:  'w-[18%]',
  total:   'w-[21%]',
  date:    'w-[27%]',
  actions: 'flex-1',
};

/* vertical rule shared between header and body */
function VRule({ light }: { light?: boolean }) {
  return (
    <div
      className="flex-shrink-0"
      style={{
        width: 2,
        height: 22,
        background: light ? '#ffffff' : '#3D3D3D',
        opacity: light ? 0.85 : 0.45,
        borderRadius: 1,
      }}
    />
  );
}

export default function InvoiceTable() {
  const [search,       setSearch]       = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [page,         setPage]         = useState(1);
  const PER_PAGE = 10;
  const TOTAL    = 50;

  const rows = invoices.filter(inv => {
    const byId = !search || inv.id.toLowerCase().includes(search.toLowerCase());
    const bySt = !statusFilter
      || (statusFilter === 'success' ? inv.status : !inv.status);
    return byId && bySt;
  });

  const showing = Math.min(PER_PAGE, rows.length);

  return (
    <div
      className="bg-white rounded-[5px] overflow-hidden"
      style={{ boxShadow: '0px 0px 2px rgba(0,0,0,0.25)' }}
    >

      {/* ── TOOLBAR ──────────────────────────────────────────────────────── */}
      <div
        className="flex flex-wrap items-center gap-x-5 gap-y-2 px-6 py-[9px]"
        style={{ boxShadow: '0px 1px 3px rgba(0,0,0,0.25)' }}
      >
        {/* Invoice label + input */}
        <div className="flex items-center gap-3">
          <span className="text-[#00485A] font-medium text-[17px] leading-[22px] tracking-[0.005em] whitespace-nowrap">
            Invoice :
          </span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search  Invoice"
            className="h-[33px] w-[160px] px-3 border border-[#00485A] rounded-[4px]
                       text-[14px] text-[#3D3D3D] placeholder-[#B5B5B5]
                       outline-none transition-colors"
          />
        </div>

        {/* Status label + select */}
        <div className="flex items-center gap-3">
          <span className="text-[#00485A] font-medium text-[17px] leading-[22px] tracking-[0.005em] whitespace-nowrap">
            Status :
          </span>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
              className="h-[33px] w-[160px] pl-3 pr-8 border border-[#00485A] rounded-[4px]
                         text-[14px] outline-none appearance-none bg-white cursor-pointer"
              style={{ color: statusFilter ? '#3D3D3D' : '#B5B5B5' }}
            >
              <option value=""     style={{ color: '#B5B5B5' }}>Select Status</option>
              <option value="success" style={{ color: '#3D3D3D' }}>Success</option>
              <option value="error"   style={{ color: '#3D3D3D' }}>Error</option>
            </select>
            <ChevronDown
              size={13}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A4A4A4] pointer-events-none"
            />
          </div>
        </div>

        {/* Create Invoice */}
        <button
          className="ml-auto h-[33px] px-[18px] bg-[#00485A] border border-[#00485A]
                     rounded-[4px] text-white font-medium text-[14px] tracking-[0.005em]
                     hover:bg-[#003a49] active:bg-[#002f3b] transition-colors whitespace-nowrap"
          style={{ boxShadow: '2px 2px 3px rgba(0,0,0,0.25)' }}
        >
          Create Invoice
        </button>
      </div>

      {/* ── TABLE ────────────────────────────────────────────────────────── */}
      <div className="px-6 pt-[10px]">

        {/* Header bar */}
        <div
          className="flex items-center rounded-[4px] h-[35px]"
          style={{ backgroundColor: '#00485A' }}
        >
          <div className={`${COL.id} pl-5`}>
            <span className="text-white font-medium text-[14px] uppercase tracking-wide leading-[27px]">
              ID
            </span>
          </div>

          <VRule light />

          <div className={`${COL.status} flex justify-center items-center`}>
            <TrendingUp size={18} className="text-white" strokeWidth={2} />
          </div>

          <VRule light />

          <div className={`${COL.total} pl-5`}>
            <span className="text-white font-medium text-[14px] uppercase tracking-wide leading-[27px]">
              TOTAL
            </span>
          </div>

          <VRule light />

          <div className={`${COL.date} pl-5`}>
            <span className="text-white font-medium text-[14px] uppercase tracking-wide leading-[27px]">
              ISSUED DATE
            </span>
          </div>

          <VRule light />

          <div className={`${COL.actions} flex justify-center items-center`}>
            <span className="text-white font-medium text-[14px] uppercase tracking-wide leading-[27px]">
              ACTIONS
            </span>
          </div>
        </div>

        {/* Data rows */}
        {rows.map((inv, i) => (
          <div
            key={inv.id}
            className="flex items-center hover:bg-[#f9fafb] transition-colors"
            style={{
              minHeight: 43,
              borderBottom: i < rows.length - 1
                ? '1px solid rgba(0,0,0,0.09)'
                : 'none',
            }}
          >
            {/* ID */}
            <div className={`${COL.id} pl-5 py-3`}>
              <span className="text-[#3D3D3D] text-[14px] tracking-[0.005em]">
                {inv.id}
              </span>
            </div>

            {/* Status */}
            <div className={`${COL.status} flex items-center py-3`}>
              <VRule />
              <div className="ml-6">
                {inv.status
                  ? <CheckCircle2 size={17} strokeWidth={1.5} className="text-[#3D3D3D]" />
                  : <Info         size={17} strokeWidth={1.5} className="text-[#FF2121]" />
                }
              </div>
            </div>

            {/* Total */}
            <div className={`${COL.total} flex items-center py-3`}>
              <VRule />
              <span className="ml-5 text-[#3D3D3D] text-[14px] tracking-[0.005em]">
                {inv.total}
              </span>
            </div>

            {/* Issued Date */}
            <div className={`${COL.date} flex items-center py-3`}>
              <VRule />
              <span className="ml-5 text-[#3D3D3D] text-[14px] tracking-[0.005em]">
                {inv.date}
              </span>
            </div>

            {/* Actions */}
            <div className={`${COL.actions} flex items-center py-3`}>
              <VRule />
              <div className="ml-4 flex items-center gap-[13px]">
                <button className="text-[#5B5B5B] hover:text-[#00485A] transition-colors">
                  <Mail        size={16} strokeWidth={1.5} />
                </button>
                <button className="text-[#5B5B5B] hover:text-[#00485A] transition-colors">
                  <Eye         size={16} strokeWidth={1.5} />
                </button>
                <button className="text-[#5B5B5B] hover:text-[#00485A] transition-colors">
                  <MoreVertical size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── PAGINATION FOOTER ────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-6 py-[11px]"
        style={{ boxShadow: '0px -1px 3px rgba(0,0,0,0.25)' }}
      >
        {/* left: entry count */}
        <span
          className="text-[13px] tracking-[0.005em]"
          style={{ color: '#A4A4A4' }}
        >
          Showing 1 to {showing} of {TOTAL} entries
        </span>

        {/* right: controls */}
        <div className="flex items-center gap-[10px]" style={{ color: '#A4A4A4' }}>
          {/* label */}
          <span className="text-[14px] whitespace-nowrap">Items per page :</span>

          {/* per-page value with underline + chevron */}
          <div
            className="flex items-center gap-[2px] pb-[1px] cursor-pointer select-none"
            style={{ borderBottom: '1px solid #A4A4A4' }}
          >
            <span className="text-[14px]">{PER_PAGE}</span>
            <ChevronDown size={12} strokeWidth={2} color="#A4A4A4" />
          </div>

          {/* range text */}
          <span className="text-[14px] ml-[6px] whitespace-nowrap">
            1&nbsp;-&nbsp;{showing}&nbsp;of&nbsp;16
          </span>

          {/* prev arrow – gray */}
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex items-center justify-center w-5 h-5
                       disabled:opacity-30 hover:opacity-60 transition-opacity"
          >
            <ChevronLeft size={18} strokeWidth={2} color="#A4A4A4" />
          </button>

          {/* next arrow – teal */}
          <button
            onClick={() => setPage(p => p + 1)}
            className="flex items-center justify-center w-5 h-5
                       hover:opacity-75 transition-opacity"
          >
            <ChevronRight size={18} strokeWidth={2} color="#00485A" />
          </button>
        </div>
      </div>

    </div>
  );
}
