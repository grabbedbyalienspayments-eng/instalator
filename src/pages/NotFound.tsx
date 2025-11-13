
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pagina nu a fost găsită</h2>
        <p className="text-gray-600 mb-8">
          Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
        </p>
        <Link 
          to="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-block"
        >
          Înapoi la pagina principală
        </Link>
      </div>
    </div>
  );
}
