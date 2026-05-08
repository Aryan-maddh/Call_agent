import { MoreHorizontal, Wallet, ArrowLeftRight, DollarSign, CreditCard, ChevronUp, ChevronDown } from 'lucide-react';
import { transactions } from '../../data/mockData';

/* ── per-type icon box ─────────────────────────────────────────────── */
function TxIcon({ type }: { type: string }) {
  const t = type.toLowerCase();

  const box = 'w-[42px] h-[42px] rounded-[8px] bg-[#F4F5F7] flex items-center justify-center flex-shrink-0';
  const ico = 'text-[#6B7280]';

  if (t.includes('wallet'))
    return <div className={box}><Wallet size={19} strokeWidth={1.6} className={ico} /></div>;

  if (t === 'bank transfer')
    return <div className={box}><ArrowLeftRight size={18} strokeWidth={1.6} className={ico} /></div>;

  if (t.includes('paypal'))
    return (
      <div className={box}>
        {/* stylised "P" — closest to the Paypal mark in the design */}
        <span className="text-[#6B7280] font-bold text-[17px] leading-none select-none">P</span>
      </div>
    );

  if (t.includes('bank'))
    return <div className={box}><DollarSign size={19} strokeWidth={1.6} className={ico} /></div>;

  if (t.includes('master') || t.includes('card'))
    return <div className={box}><CreditCard size={19} strokeWidth={1.6} className={ico} /></div>;

  return <div className={box}><DollarSign size={19} strokeWidth={1.6} className={ico} /></div>;
}

/* ── amount badge ──────────────────────────────────────────────────── */
function Amount({ value, positive }: { value: string; positive: boolean }) {
  return (
    <div className={`flex items-center gap-[2px] flex-shrink-0 font-semibold text-[14px]
      ${positive ? 'text-[#00C678]' : 'text-[#FF4D4F]'}`}>
      {positive
        ? <ChevronUp   size={13} strokeWidth={3} />
        : <ChevronDown size={13} strokeWidth={3} />
      }
      <span>{value}</span>
    </div>
  );
}

/* ── component ─────────────────────────────────────────────────────── */
export default function Transactions() {
  return (
    <div
      className="bg-white rounded-[5px]"
      style={{ boxShadow: '0px 0px 2px rgba(0,0,0,0.25)' }}
    >
      {/* header */}
      <div className="flex items-start justify-between px-5 pt-5 pb-4">
        <div>
          <h3 className="text-[#00485A] font-semibold text-[19px] leading-[1.3]">
            Transactions
          </h3>
          <p className="text-[#5B5B5B] text-[13px] font-medium mt-[3px]">
            Total 58 Transactions done in this Month
          </p>
        </div>
        <button className="text-[#5B5B5B] hover:text-[#00485A] transition-colors mt-0.5">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* rows */}
      <div className="px-5 pb-4">
        {transactions.map((tx, i) => (
          <div key={tx.id}>
            <div className="flex items-center gap-[14px] py-[11px]">
              <TxIcon type={tx.type} />

              <div className="flex-1 min-w-0">
                <p className="text-[#1D1F2C] font-semibold text-[14px] leading-[20px] truncate">
                  {tx.type}
                </p>
                <p className="text-[#5B5B5B] text-[13px] leading-[18px] truncate">
                  {tx.description}
                </p>
              </div>

              <Amount value={tx.amount} positive={tx.positive} />
            </div>

            {/* row separator — skip after last row */}
            {i < transactions.length - 1 && (
              <div className="h-px bg-[#F0F0F0]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
