// src/App.js

import React, { useState, useEffect } from 'react';
import Level from './components/Level';
import processData from './data/processData';
import Navbar from './components/Navbar';

function App() {
  const [currentLevel, setCurrentLevel] = useState('nivel0');
  const [history, setHistory] = useState([]);
  const [levelData, setLevelData] = useState([]);
  const [title, setTitle] = useState('');

  const getGroupColor = (group) => {
    switch (group) {
      case 'estrategico':
        return '#c0392b';
      case 'operacional':
        return '#2980b9';
      case 'soporte':
        return '#27ae60';
      default:
        return '#3498db'; // Azul por defecto
    }
  };

  const loadLevel0 = () => {
    setCurrentLevel('nivel0');
    setTitle('');
    setLevelData([
      {
        name: 'Procesos Estratégicos',
        onClick: () => loadLevel1('estrategico'),
        bgColor: getGroupColor('estrategico'),
      },
      {
        name: 'Procesos Operacionales',
        onClick: () => loadLevel1('operacional'),
        bgColor: getGroupColor('operacional'),
      },
      {
        name: 'Procesos de Soporte',
        onClick: () => loadLevel1('soporte'),
        bgColor: getGroupColor('soporte'),
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
    if (!subProcess.subProcesses) {
      // Si no hay más subprocesos, mostrar el nivel 4
      loadLevel4(group, processId, subProcessId);
      return;
    }
    const boxes = subProcess.subProcesses.map((subSubProcess) => ({
      name: subSubProcess.name,
      onClick: () =>
        loadLevel4(group, processId, subProcessId, subSubProcess.id),
      bgColor: getGroupColor(group),
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
    let found = false;

    for (const groupKey in processData) {
      const group = processData[groupKey];

      for (const process of group.processes) {
        if (process.name.toLowerCase().includes(term)) {
          // Navega al proceso
          loadLevel1(groupKey);
          setTimeout(() => loadLevel2(groupKey, process.id), 0);
          found = true;
          return;
        }

        for (const subProcess of process.subProcesses) {
          if (subProcess.name.toLowerCase().includes(term)) {
            // Navega al subproceso
            loadLevel1(groupKey);
            setTimeout(() => {
              loadLevel2(groupKey, process.id);
              setTimeout(() => loadLevel3(groupKey, process.id, subProcess.id), 0);
            }, 0);
            found = true;
            return;
          }

          if (subProcess.subProcesses) {
            for (const subSubProcess of subProcess.subProcesses) {
              if (subSubProcess.name.toLowerCase().includes(term)) {
                // Navega al sub-subproceso
                loadLevel1(groupKey);
                setTimeout(() => {
                  loadLevel2(groupKey, process.id);
                  setTimeout(() => {
                    loadLevel3(groupKey, process.id, subProcess.id);
                    setTimeout(
                      () =>
                        loadLevel4(
                          groupKey,
                          process.id,
                          subProcess.id,
                          subSubProcess.id
                        ),
                      0
                    );
                  }, 0);
                }, 0);
                found = true;
                return;
              }
            }
          }
        }
      }
    }

    if (!found) {
      alert('Proceso no encontrado');
    }
  };

  // En App.js

const handleNavigation = (processName, subProcessName, subSubProcessName) => {
  let found = false;

  for (const groupKey in processData) {
    const group = processData[groupKey];

    for (const process of group.processes) {
      if (process.name === processName) {
        loadLevel1(groupKey);
        setTimeout(() => loadLevel2(groupKey, process.id), 0);
        found = true;

        if (subProcessName) {
          const subProcess = process.subProcesses.find(
            (sp) => sp.name === subProcessName
          );
          if (subProcess) {
            setTimeout(() => loadLevel3(groupKey, process.id, subProcess.id), 0);

            if (subSubProcessName) {
              const subSubProcess = subProcess.subProcesses.find(
                (ssp) => ssp.name === subSubProcessName
              );
              if (subSubProcess) {
                setTimeout(
                  () =>
                    loadLevel4(
                      groupKey,
                      process.id,
                      subProcess.id,
                      subSubProcess.id
                    ),
                  0
                );
              }
            }
          }
        }

        return;
      }
    }
  }

  if (!found) {
    alert('Proceso no encontrado');
  }
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
      {/* Navbar */}
      <Navbar
        onSearch={handleSearch}
        currentLevel={currentLevel}
        onNavigate={handleNavigation}
      />

      {/* Main Content */}
      <main className="flex-grow w-full flex flex-col items-center mt-20">
        <Level title={title} boxes={levelData} />
      </main>

      {/* Navigation Icons */}
      {currentLevel !== 'nivel0' && (
        <div className="fixed bottom-5 right-5 z-50 flex space-x-4">
          <button
            onClick={goBack}
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            {/* Puedes reemplazar con un icono de FontAwesome */}
            <span className="text-2xl">←</span>
          </button>
          <button
            onClick={goHome}
            className="bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          >
            {/* Puedes reemplazar con un icono de FontAwesome */}
            <span className="text-2xl">🏠</span>
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-white shadow-inner">
        <div className="max-w-screen-lg mx-auto py-4 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} SERVIU Región del Biobío. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
