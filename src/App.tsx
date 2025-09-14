import Header from './components/Header'
import CreateInvoiceSection from './components/CreateInvoiceSection'
import EarningsSection from './components/EarningsSection'
import ChartSection from './components/ChartSection'
import InvoiceList from './components/InvoiceList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#e7cde6]">
      <div className="min-h-screen">
        {/* Header */}
        <Header />
        
        {/* Main Content Container */}
        <div className="bg-white rounded-t-[46px] md:rounded-t-3xl mt-5 pb-6 flex flex-col gap-3">
          <CreateInvoiceSection />
          <EarningsSection />
          <ChartSection />
          <InvoiceList />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App
