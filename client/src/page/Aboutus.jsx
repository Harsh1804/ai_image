import { useNavigate } from 'react-router-dom';

const aboutus = () => {
  const navigate = useNavigate();
 
  return(
    <section className="max-w-7xl mx-auto bg-white ">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="text-gray-500 font-inter font-normal dark:text-gray-900">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-Black">We didn't reinvent the wheel</h2>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://img.playbook.com/EfgGoahBIGUOw7SlIujOoTvjn3baS4rcSOZTxHQIIu4/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzk5NjUxOTYz/LWExZTUtNDEwMC05/ZmY1LWUzZGM5ZTE4/N2QyZA" alt="Perry the Platypus" />
                <img className="w-full rounded-lg" src="https://i.pinimg.com/564x/dd/25/46/dd2546ab1a2f31c2d1119b6b8f3decd2.jpg" alt="Perry the Platypus" />
            </div>
        </div>
    </section>
  );
};

export default aboutus;
