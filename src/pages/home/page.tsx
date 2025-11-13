import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/ef28c49b8616055595ccec32476a2655/7561472260b66aa8d88a3ade4a48a381.png"
                alt="AquaFix Radu Logo"
                className="h-16 w-auto cursor-pointer"
                onClick={scrollToTop}
              />
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('despre')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Despre
              </button>
              <button onClick={() => scrollToSection('servicii')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Servicii
              </button>
              <button onClick={() => scrollToSection('testimoniale')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Testimoniale
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer font-medium">
                Contact
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:0723555901" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer font-semibold">
                Sună acum
              </a>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('despre')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-left font-medium">
                  Despre
                </button>
                <button onClick={() => scrollToSection('servicii')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-left font-medium">
                  Servicii
                </button>
                <button onClick={() => scrollToSection('testimoniale')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-left font-medium">
                  Testimoniale
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer text-left font-medium">
                  Contact
                </button>
                <a href="tel:0723555901" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer text-center font-semibold">
                  Sună acum
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
               style={{
                 backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Young%20professional%20plumber%20in%20blue%20uniform%20with%20professional%20tools%20repairing%20a%20pipe%20in%20a%20modern%20bathroom%2C%20natural%20lighting%2C%20clean%20and%20realistic%20atmosphere%2C%20professional%20service%20worker%2C%20high%20quality%20photography%2C%20modern%20interior%20design%2C%20clean%20workspace&width=1920&height=1080&seq=hero-plumber&orientation=landscape')`
               }}>
        <div className="container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-poppins">
              Instalator rapid în Cluj – AquaFix Radu
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 font-light">
              Reparații sanitare, montaj robineți, chiuvete și intervenții urgente în Cluj-Napoca și împrejurimi.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a href="tel:0723555901" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap cursor-pointer">
                Sună acum – 0723 555 901
              </a>
              <a href="https://wa.me/40723555901" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
                Contactează pe WhatsApp
              </a>
            </div>
            
            <p className="text-sm opacity-90">
              Disponibil Luni–Duminică 08:00–20:00 | Urgențe: Non-stop
            </p>
          </div>
        </div>
      </section>

      {/* Despre Noi Section */}
      <section id="despre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">Despre AquaFix Radu</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Mă numesc Mihai Radu și sunt instalator profesionist din Cluj-Napoca, cu peste 3 ani de experiență și recomandări excelente. Prin AquaFix Radu, ofer servicii rapide și de calitate pentru orice problemă sanitară: de la robineți și chiuvete, până la țevi sparte și scurgeri înfundate.
                  </p>
                  <p>
                    Clienții mei apreciază promptitudinea, seriozitatea și faptul că las totul curat după fiecare intervenție. Lucrez corect, ofer garanție pe lucrare și intervin în aceeași zi în Cluj și zonele din jur (Florești, Baciu).
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20plumbing%20tools%20and%20equipment%20organized%20on%20clean%20workbench%2C%20modern%20bathroom%20renovation%20workspace%2C%20high%20quality%20plumbing%20supplies%2C%20clean%20and%20organized%20professional%20setup%2C%20blue%20and%20white%20color%20scheme%2C%20modern%20interior&width=600&height=600&seq=plumber-tools&orientation=squarish"
                  alt="Echipamente profesionale instalator"
                  className="rounded-lg shadow-lg object-cover w-full max-w-md h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicii Section */}
      <section id="servicii" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-800 mb-4 font-poppins">Serviciile oferite</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluții complete pentru toate nevoile tale sanitare, cu echipamente moderne și garanție pe lucrare
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Service 1 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer" onClick={handleServiceClick}>
                <div className="relative mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-tools-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20chrome%20faucet%20being%20installed%20on%20elegant%20white%20sink%2C%20professional%20plumbing%20work%2C%20clean%20bathroom%20environment%2C%20high-end%20fixtures%2C%20professional%20installation%20process%2C%20bright%20lighting%2C%20contemporary%20design&width=400&height=250&seq=faucet-modern&orientation=landscape"
                  alt="Montaj robineți"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Montaj și reparat robineți</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Instalare și înlocuire robineți, fitinguri și racorduri cu etanșare profesională și garanție extinsă.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  <span>Serviciu profesional</span>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer" onClick={handleServiceClick}>
                <div className="relative mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-home-4-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20plumber%20installing%20modern%20white%20ceramic%20sink%20in%20contemporary%20bathroom%2C%20clean%20installation%20process%2C%20modern%20fixtures%2C%20professional%20tools%2C%20bright%20clean%20environment%2C%20high%20quality%20workmanship&width=400&height=250&seq=sink-modern&orientation=landscape"
                  alt="Montaj chiuvete"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Montaj chiuvete și obiecte sanitare</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Montăm chiuvete, WC-uri și cabine de duș cu precizie și finisaj curat, respectând toate standardele.
                </p>
                <div className="flex items-center text-green-600 font-semibold">
                  <span>Montaj garantat</span>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer" onClick={handleServiceClick}>
                <div className="relative mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-alarm-warning-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Emergency%20plumbing%20repair%20professional%20fixing%20burst%20pipe%20with%20modern%20tools%2C%20urgent%20repair%20situation%2C%20professional%20emergency%20service%2C%20clean%20work%20environment%2C%20immediate%20response%2C%20high%20quality%20service&width=400&height=250&seq=emergency-modern&orientation=landscape"
                  alt="Spargere țevi urgențe"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Spargere țevi &amp; intervenții urgente</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Reacționăm imediat la urgențe. Reparam țevi sparte și scurgeri de apă non-stop, 24/7.
                </p>
                <div className="flex items-center text-red-600 font-semibold">
                  <span>Intervenție rapidă</span>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer" onClick={handleServiceClick}>
                <div className="relative mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-drop-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20drain%20cleaning%20equipment%20in%20action%2C%20clear%20water%20flowing%20through%20clean%20pipes%2C%20modern%20plumbing%20tools%2C%20professional%20drain%20maintenance%2C%20clean%20bathroom%20environment%2C%20high%20quality%20service&width=400&height=250&seq=drain-modern&orientation=landscape"
                  alt="Deblocare scurgeri"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Deblocare scurgeri</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Curățare și desfundare scurgeri rapid, fără daune și fără murdărie, cu echipamente profesionale.
                </p>
                <div className="flex items-center text-cyan-600 font-semibold">
                  <span>Soluție rapidă</span>
                </div>
              </div>

              {/* Service 5 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer" onClick={handleServiceClick}>
                <div className="relative mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-search-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Advanced%20leak%20detection%20equipment%20scanning%20pipes%2C%20professional%20diagnostic%20tools%2C%20modern%20technology%20for%20plumbing%20inspection%2C%20high-tech%20detection%20devices%2C%20professional%20service%2C%20clean%20work%20environment&width=400&height=250&seq=detection-modern&orientation=landscape"
                  alt="Detectare pierderi apă"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Detectare pierderi apă</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Identificăm pierderile invizibile de apă cu echipamente profesionale de ultimă generație.
                </p>
                <div className="flex items-center text-orange-600 font-semibold">
                  <span>Diagnostic gratuit</span>
                </div>
              </div>

              {/* Service 6 */}
              <div className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer" onClick={handleServiceClick}>
                <div className="relative mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <i className="ri-refresh-line text-3xl text-white"></i>
                  </div>
                </div>
                <img 
                  src="https://readdy.ai/api/search-image?query=New%20modern%20pipes%20installation%20in%20renovated%20bathroom%2C%20professional%20pipe%20replacement%20work%2C%20clean%20installation%2C%20modern%20plumbing%20system%2C%20bright%20clean%20environment%2C%20high%20quality%20workmanship&width=400&height=250&seq=pipes-modern&orientation=landscape"
                  alt="Înlocuire țevi"
                  className="w-full h-48 object-cover rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">Înlocuire țevi și instalații vechi</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Reînnoim instalațiile pentru siguranță și eficiență maximă, cu materiale de cea mai bună calitate.
                </p>
                <div className="flex items-center text-indigo-600 font-semibold">
                  <span>Consultanță gratuită</span>
                </div>
              </div>
              
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-4 font-poppins">Ai nevoie de o intervenție rapidă?</h3>
                <p className="text-xl mb-6 opacity-90">Contactează-mă acum pentru o evaluare gratuită și o ofertă personalizată</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:0723555901" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-phone-line mr-2"></i>
                    Sună acum
                  </a>
                  <a href="https://wa.me/40723555901" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors whitespace-nowrap cursor-pointer">
                    <i className="ri-whatsapp-line mr-2"></i>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De ce noi Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 font-poppins">De ce AquaFix Radu?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">💨</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Intervenții rapide în aceeași zi</h3>
                  <p className="opacity-90">Ajung la locație în cel mai scurt timp, în Cluj și împrejurimi.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">💰</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Preț corect și transparent</h3>
                  <p className="opacity-90">Fără costuri ascunse, discutăm totul clar înainte de lucrare.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">🧼</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Lucru curat și garantat</h3>
                  <p className="opacity-90">Totul rămâne ordonat, iar lucrarea e garantată.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 font-poppins">Disponibil Non-Stop pentru urgențe</h3>
                  <p className="opacity-90">Țeavă spartă noaptea? Vin imediat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoniale Section */}
      <section id="testimoniale" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">Ce spun clienții mei</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="ri-user-line text-3xl text-blue-600"></i>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "A venit în 30 de minute, a reparat tot și a lăsat baia impecabilă. Recomand!"
                </p>
                <p className="font-semibold text-gray-800 font-poppins">Andrei M., Cluj-Napoca</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="ri-user-line text-3xl text-blue-600"></i>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Lucrează curat, vorbește politicos și oferă garanție. Excelent!"
                </p>
                <p className="font-semibold text-gray-800 font-poppins">Diana L., Florești</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="ri-user-line text-3xl text-blue-600"></i>
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "Serviciu rapid și profesionist. Am salvat mult timp."
                </p>
                <p className="font-semibold text-gray-800 font-poppins">George P., Baciu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">Contactează-mă</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-600 mb-8">
                  Pentru programări rapide sau urgențe, sună direct sau scrie pe WhatsApp.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-poppins">Locație</h3>
                      <p className="text-gray-600">Cluj-Napoca, zona Mărăști</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-phone-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-poppins">Telefon</h3>
                      <a href="tel:0723555901" className="text-blue-600 hover:text-blue-700 cursor-pointer">0723 555 901</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-mail-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-poppins">Email</h3>
                      <a href="mailto:contact@aquafixradu.ro" className="text-blue-600 hover:text-blue-700 cursor-pointer">contact@aquafixradu.ro</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <i className="ri-time-line text-blue-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 font-poppins">Program</h3>
                      <p className="text-gray-600">Luni–Duminică 08:00–20:00</p>
                      <p className="text-gray-600">Urgențe Non-stop</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.8234567890123!2d23.5880556!3d46.7712101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490c1f916c0b77%3A0x1234567890abcdef!2zTcSDcsSDyJl0aSwgQ2x1ai1OYXBvY2E!5e0!3m2!1sro!2sro!4v1234567890123!5m2!1sro!2sro"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                  title="Locația AquaFix Radu în Cluj-Napoca"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="mb-2">
              © 2025 AquaFix Radu – Instalator în Cluj-Napoca | Toate drepturile rezervate.
            </p>
            <p className="text-blue-200">
              <a href="https://websiteon.ro" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">
                Made by WebsiteON.ro
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Fixed Call Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="tel:0723555901" className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors cursor-pointer block" aria-label="Sună acum">
          <i className="ri-phone-line text-2xl"></i>
        </a>
      </div>

      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a href="https://wa.me/40723555901" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors cursor-pointer block" aria-label="Contactează pe WhatsApp">
          <i className="ri-whatsapp-line text-2xl"></i>
        </a>
      </div>
    </div>
  );
}
