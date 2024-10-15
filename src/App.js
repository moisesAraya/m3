import React, { useState, useEffect } from 'react';
import processData from './data/processData';
import Navbar from './components/Navbar';

function App() {
  const [currentLevel, setCurrentLevel] = useState('nivel0');
  const [history, setHistory] = useState([]);
  const [levelData, setLevelData] = useState([]);
  const [title, setTitle] = useState('Procesos Principales');

  const getGroupColor = (group) => {
    switch (group) {
      case 'estrategico':
        return 'bg-red-100 text-red-800';
      case 'operacional':
        return 'bg-blue-100 text-blue-800';
      case 'soporte':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const loadLevel0 = () => {
    setCurrentLevel('nivel0');
    setTitle('Procesos Principales');
    setLevelData([
      {
        name: 'Procesos Estratégicos',
        onClick: () => loadLevel1('estrategico'),
        bgColor: getGroupColor('estrategico'),
        subProcesses: processData.estrategico.processes.map((process) => ({
          name: process.name,
        })),
      },
      {
        name: 'Procesos Operacionales',
        onClick: () => loadLevel1('operacional'),
        bgColor: getGroupColor('operacional'),
        subProcesses: processData.operacional.processes.map((process) => ({
          name: process.name,
        })),
      },
      {
        name: 'Procesos de Soporte',
        onClick: () => loadLevel1('soporte'),
        bgColor: getGroupColor('soporte'),
        subProcesses: processData.soporte.processes.map((process) => ({
          name: process.name,
        })),
      },
    ]);
  };

  const loadLevel1 = (group) => {
    setCurrentLevel('nivel1');
    setHistory((prev) => [...prev, loadLevel0]);
    const groupData = processData[group];
    setTitle(groupData.title);
    const boxes = groupData.processes.map((process) => ({
      name: process.name,
      onClick: () => loadLevel2(group, process.id),
      bgColor: getGroupColor(group),
      subProcesses: process.subProcesses || [],
    }));
    setLevelData(boxes);
  };

  const loadLevel2 = (group, processId) => {
    setCurrentLevel('nivel2');
    setHistory((prev) => [...prev, () => loadLevel1(group)]);
    const process = processData[group].processes.find((p) => p.id === processId);
    setTitle(process.name);

    const boxes = process.subProcesses.map((subProcess) => ({
      name: subProcess.name,
      onClick: () => loadLevel3(group, processId, subProcess.id),
      bgColor: getGroupColor(group),
      subProcesses: subProcess.subProcesses || [],
    }));
    setLevelData(boxes);
  };

  const loadLevel3 = (group, processId, subProcessId) => {
    setCurrentLevel('nivel3');
    setHistory((prev) => [...prev, () => loadLevel2(group, processId)]);
    const subProcess = processData[group].processes
      .find((p) => p.id === processId)
      .subProcesses.find((sp) => sp.id === subProcessId);
    setTitle(subProcess.name);

    if (!subProcess.subProcesses || subProcess.subProcesses.length === 0) {
      loadLevel4(group, processId, subProcessId);
      return;
    }

    const boxes = subProcess.subProcesses.map((subSubProcess) => ({
      name: subSubProcess.name,
      onClick: () => loadLevel4(group, processId, subProcessId, subSubProcess.id),
      bgColor: getGroupColor(group),
      subProcesses: subSubProcess.subProcesses || [], // Añadir subprocesos si existen
    }));
    setLevelData(boxes);
  };

  const loadLevel4 = (group, processId, subProcessId, subSubProcessId) => {
    setCurrentLevel('nivel4');
    setHistory((prev) => [...prev, () => loadLevel3(group, processId, subProcessId)]);
    const subSubProcess = processData[group].processes
      .find((p) => p.id === processId)
      .subProcesses.find((sp) => sp.id === subProcessId)
      .subProcesses.find((ssp) => ssp.id === subSubProcessId);

    if (!subSubProcess) {
      console.error(`Subproceso no encontrado: ${subSubProcessId}`);
      return;
    }
    setTitle(subSubProcess.name);
    setLevelData([
      {
        name: 'Ver Documento',
        onClick: () => window.open(subSubProcess.link, '_blank'),
        bgColor: getGroupColor(group),
      },
    ]);
  };

  const handleSearch = (term) => {
    term = term.toLowerCase();
    const suggestions = [];
  
    for (const groupKey in processData) {
      const group = processData[groupKey];
  
      for (const process of group.processes) {
        if (process.name.toLowerCase().includes(term)) {
          suggestions.push({
            name: process.name,
            group: groupKey,
            onClick: () => {
              loadLevel1(groupKey);
              setTimeout(() => loadLevel2(groupKey, process.id), 0);
            },
          });
        }
  
        for (const subProcess of process.subProcesses) {
          if (subProcess.name.toLowerCase().includes(term)) {
            suggestions.push({
              name: subProcess.name,
              group: groupKey,
              onClick: () => {
                loadLevel1(groupKey);
                setTimeout(() => {
                  loadLevel2(groupKey, process.id);
                  setTimeout(() => loadLevel3(groupKey, process.id, subProcess.id), 0);
                }, 0);
              },
            });
          }
  
          if (subProcess.subProcesses) {
            for (const subSubProcess of subProcess.subProcesses) {
              if (subSubProcess.name.toLowerCase().includes(term)) {
                suggestions.push({
                  name: subSubProcess.name,
                  group: groupKey,
                  onClick: () => {
                    loadLevel1(groupKey);
                    setTimeout(() => {
                      loadLevel2(groupKey, process.id);
                      setTimeout(() => {
                        loadLevel3(groupKey, process.id, subProcess.id);
                        setTimeout(() => {
                          loadLevel4(groupKey, process.id, subProcess.id, subSubProcess.id);
                        }, 0);
                      }, 0);
                    }, 0);
                  },
                });
              }
            }
          }
        }
      }
    }

    return suggestions;
  };

  const goBack = () => {
    if (history.length > 0) {
      const previousLoadFunction = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      previousLoadFunction();
    }
  };

  const goHome = () => {
    setHistory([]);
    loadLevel0();
  };

  useEffect(() => {
    loadLevel0();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar onSearch={handleSearch} currentLevel={currentLevel} />
      <main className="flex-grow w-full flex flex-col items-center pt-24 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">{title}</h1>

        {/* Ajuste de grid */}
        <div
  className={`grid gap-6 w-full max-w-screen-xl ${
    levelData.length === 1
      ? 'grid-cols-1 place-items-center'
      : levelData.length === 2
      ? 'grid-cols-2 justify-center'
      : levelData.length === 3
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center'
      : levelData.length === 5
      ? 'grid-cols-2 md:grid-cols-3 justify-center'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  } justify-center`}
>

          {levelData.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer ${item.bgColor}`}
              onClick={item.onClick}
            >
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              {/* Mostrar subprocesos en listas ordenadas si existen */}
              {item.subProcesses && item.subProcesses.length > 0 ? (
                <ul className="text-gray-700 list-disc ml-5">
                  {item.subProcesses.map((subProcess, subIndex) => (
                    <li key={subIndex} className="text-sm mt-1">
                      {subProcess.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700">Haz clic para explorar más.</p>
              )}
            </div>
          ))}
        </div>
      </main>
      {currentLevel !== 'nivel0' && (
        <div className="fixed bottom-5 right-5 z-50 flex space-x-4">
          <button
            onClick={goBack}
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">←</span>
          </button>
          <button
            onClick={goHome}
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">🏠</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
