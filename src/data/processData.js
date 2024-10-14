const processData = {
    estrategico: {
      title: "Procesos Estratégicos",
      processes: [
        {
          id: "gestion-estrategica",
          name: "Gestión Estratégica",
          subProcesses: [
            {
              id: "planificacion-estrategica",
              name: "Planificación Estratégica y operativa",
              subProcesses: [
                {
                  id: "definiciones-estrategicas",
                  name: "Determinación y/o actualización de definiciones estratégicas",
                  link: "https://example.com/definiciones-estrategicas.pdf",
                },
                {
                  id: "planificacion-habitacional",
                  name: "Planificación de la Gestión Habitacional y Urbana",
                  link: "https://example.com/planificacion-habitacional.pdf",
                },
                {
                  id: "programacion-fisica-financiera",
                  name: "Programación Física y Financiera",
                  link: "https://example.com/programacion-fisica-financiera.pdf",
                }
              ],
            },
            {
              id: "formulacion-presupuestaria",
              name: "Formulación Presupuestaria",
              subProcesses: [
                {
                  id: "elaboracion-pegir",
                  name: "Elaboración PEGIR",
                  link: "https://example.com/elaboracion-pegir.pdf",
                },
                {
                  id: "elaboracion-presupuesto",
                  name: "Elaboración proyecto presupuesto",
                  link: "https://example.com/elaboracion-presupuesto.pdf",
                }
              ],
            },
            {
              id: "control-gestion",
              name: "Control de Gestión",
              subProcesses: [
                {
                  id: "herramientas-control",
                  name: "Elaboración Herramientas de Control (SMDI)",
                  link: "https://example.com/herramientas-control.pdf",
                },
                {
                  id: "recopilacion-analisis",
                  name: "Recopilación y Análisis de información",
                  link: "https://example.com/recopilacion-analisis.pdf",
                },
                {
                  id: "reportes-control",
                  name: "Generación y comunicación de reportes de Control de Gestión",
                  link: "https://example.com/reportes-control.pdf",
                }
              ],
            },
            {
              id: "transversalizacion-genero",
              name: "Transversalización de los enfoques de Género y DDHH",
              subProcesses: [
                {
                  id: "gestion-genero-ddhh",
                  name: "Gestión del enfoque de Género y Derechos Humanos",
                  link: "https://example.com/gestion-genero-ddhh.pdf",
                }
              ],
            }
          ],
        },
        {
          id: "coordinacion-organismos",
          name: "Coordinación con otros organismos",
          subProcesses: [
            {
              id: "gestion-intersectorial",
              name: "Gestión intersectorial",
              subProcesses: [
                {
                  id: "coordinacion-intersectorial",
                  name: "Coordinación intersectorial",
                  link: "https://example.com/coordinacion-intersectorial.pdf",
                }
              ],
            }
          ],
        },
        {
          id: "difusion-participacion",
          name: "Difusión, información y fortalecimiento de la participación ciudadana",
          subProcesses: [
            {
              id: "gestion-solicitudes",
              name: "Atención y Gestión de Solicitudes Ciudadanas",
              subProcesses: [
                {
                  id: "recepcion-solicitud",
                  name: "Recepción de la solicitud",
                  link: "https://example.com/recepcion-solicitud.pdf",
                },
                {
                  id: "elaboracion-respuesta",
                  name: "Elaboración de la respuesta",
                  link: "https://example.com/elaboracion-respuesta.pdf",
                }
              ],
            },
            {
              id: "participacion-ciudadana",
              name: "Gestión de Instancias de Participación Ciudadana",
              subProcesses: [
                {
                  id: "programacion-pac",
                  name: "Elaborar Programación Anual de implementación de instancias de PAC",
                  link: "https://example.com/programacion-pac.pdf",
                },
                {
                  id: "ejecutar-pac",
                  name: "Ejecutar Programación Anual de implementación de instancias de PAC",
                  link: "https://example.com/ejecutar-pac.pdf",
                }
              ],
            },
            {
              id: "formacion-ciudadana",
              name: "Formación Ciudadana",
              subProcesses: [
                {
                  id: "actividades-formativas",
                  name: "Generar actividades formativas para la ciudadanía",
                  link: "https://example.com/actividades-formativas.pdf",
                }
              ],
            }
          ],
        },
        {
          id: "modernizacion-gestion",
          name: "Modernización de la gestión",
          subProcesses: [
            {
              id: "gestion-procesos",
              name: "Gestión de Procesos y Sistemas de Gestión",
              subProcesses: [
                {
                  id: "levantamiento-procesos",
                  name: "Levantamiento de Procesos",
                  link: "https://example.com/levantamiento-procesos.pdf",
                },
                {
                  id: "mejora-sistemas-gestion",
                  name: "Implementación y mejora de sistemas de gestión",
                  link: "https://example.com/mejora-sistemas-gestion.pdf",
                }
              ],
            }
          ],
        },
        {
          id: "innovacion-sustentabilidad",
          name: "Innovación y Sustentabilidad",
          subProcesses: [
            {
              id: "innovacion-tecnologias",
              name: "Innovación y Tecnologías de la Construcción",
              subProcesses: [
                {
                  id: "medidas-innovacion",
                  name: "Implementación medidas de Innovación y Tecnologías de la Construcción",
                  link: "https://example.com/medidas-innovacion.pdf",
                }
              ],
            },
            {
              id: "cambio-climatico",
              name: "Gestión del Cambio Climático",
              subProcesses: [
                {
                  id: "medidas-cambio-climatico",
                  name: "Implementación medidas para cambio climático",
                  link: "https://example.com/medidas-cambio-climatico.pdf",
                }
              ],
            },
            {
              id: "riesgos-desastres",
              name: "Gestión de Riesgos de Desastres",
              subProcesses: [
                {
                  id: "plan-reconstruccion",
                  name: "Gestión de Plan de Reconstrucción",
                  link: "https://example.com/plan-reconstruccion.pdf",
                }
              ],
            },
            {
              id: "estrategia-construccion",
              name: "Gestión de la Estrategia Nacional de Construcción Sustentable",
              subProcesses: [
                {
                  id: "implementacion-estrategia",
                  name: "Implementación Estrategia Nacional de Construcción Sustentable",
                  link: "https://example.com/implementacion-estrategia.pdf",
                }
              ],
            }
          ],
        },
        {
          id: "supervision-interna",
          name: "Supervisión interna",
          subProcesses: [
            {
              id: "supervigilancia-legal",
              name: "Supervigilancia legal de Procedimientos Administrativos",
              subProcesses: [
                {
                  id: "revision-control",
                  name: "Revisión y control procedimientos y actos administrativos",
                  link: "https://example.com/revision-control.pdf",
                },
                {
                  id: "gobierno-integridad",
                  name: "Coordinación Gobierno de Integridad",
                  link: "https://example.com/gobierno-integridad.pdf",
                },
                {
                  id: "seguimiento-externo",
                  name: "Seguimiento compromisos Control Externo",
                  link: "https://example.com/seguimiento-externo.pdf",
                }
              ],
            },
            {
              id: "auditorias-internas",
              name: "Gestión de Auditorías Internas",
              subProcesses: [
                {
                  id: "planificacion-auditorias",
                  name: "Planificación, ejecución y seguimiento de auditorías internas",
                  link: "https://example.com/planificacion-auditorias.pdf",
                }
              ],
            }
          ],
        }
      ],
    },
      operacional: {
        title: "Procesos Operacionales",
        processes: [
          {
            id: "levantamiento-necesidades",
            name: "Levantamiento y análisis de necesidades habitacionales y urbanas",
            subProcesses: [
              {
                id: "informacion-territorial",
                name: "Generación y Administración de información territorial",
                subProcesses: [
                  {
                    id: "gestion-territorial",
                    name: "Gestión territorial de la demanda",
                    link: "https://example.com/gestion-territorial.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "planificacion-gestion-territorial",
            name: "Planificación y Gestión Territorial",
            subProcesses: [
              {
                id: "proyectos-urbanos-habitacionales",
                name: "Planificación y programación integral proyectos urbanos y habitacionales",
                subProcesses: [
                  {
                    id: "iniciativas-inversion",
                    name: "Implementaciones iniciativas inversión proyectos urbanos y habitacionales",
                    link: "https://example.com/iniciativas-inversion.pdf",
                  }
                ],
              },
              {
                id: "gestion-suelos",
                name: "Gestión de Suelos",
                subProcesses: [
                  {
                    id: "banco-suelos",
                    name: "Administración del Banco de Suelos",
                    link: "https://example.com/banco-suelos.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "gestion-instrumentos",
            name: "Gestión de instrumentos para garantizar el acceso a la vivienda / Gestión de instrumentos para el mejoramiento de viviendas, barrios y ciudades",
            subProcesses: [
              {
                id: "diseno-evaluacion",
                name: "Diseño y Evaluación de iniciativas",
                subProcesses: [
                  {
                    id: "seguimiento-proyectos",
                    name: "Seguimiento en la preparación de proyectos",
                    link: "https://example.com/seguimiento-proyectos.pdf",
                  },
                  {
                    id: "priorizacion-proyectos",
                    name: "Priorización de proyectos",
                    link: "https://example.com/priorizacion-proyectos.pdf",
                  },
                  {
                    id: "gestion-obtencion",
                    name: "Gestión obtención RS y disponibilidad presupuestaria",
                    link: "https://example.com/gestion-obtencion.pdf",
                  },
                  {
                    id: "gestion-convenios",
                    name: "Gestión de Convenios y Financiamiento",
                    link: "https://example.com/gestion-convenios.pdf",
                  },
                  {
                    id: "diseno-proyectos",
                    name: "Diseño de Proyectos Urbanos y/o Habitacionales",
                    link: "https://example.com/diseno-proyectos.pdf",
                  },
                  {
                    id: "evaluacion-proyectos",
                    name: "Evaluación de Proyectos Urbanos y/o Habitacionales",
                    link: "https://example.com/evaluacion-proyectos.pdf",
                  }
                ],
              },
              {
                id: "postulacion",
                name: "Postulación",
                subProcesses: [
                  {
                    id: "gestion-postulacion",
                    name: "Gestión de la postulación Urbana y/o Habitacionales",
                    link: "https://example.com/gestion-postulacion.pdf",
                  },
                  {
                    id: "asignaciones-directas",
                    name: "Gestión Asignaciones Directas",
                    link: "https://example.com/asignaciones-directas.pdf",
                  }
                ],
              },
              {
                id: "seleccion",
                name: "Selección",
                subProcesses: [
                  {
                    id: "apelacion",
                    name: "Apelación",
                    link: "https://example.com/apelacion.pdf",
                  }
                ],
              },
              {
                id: "adquisicion-obras",
                name: "Adquisición de Obras, Suelos y Servicios",
                subProcesses: [
                  {
                    id: "antecedentes-tecnicos",
                    name: "Preparación de antecedentes técnicos y administrativos",
                    link: "https://example.com/antecedentes-tecnicos.pdf",
                  },
                  {
                    id: "contratacion",
                    name: "Contratación",
                    link: "https://example.com/contratacion.pdf",
                  },
                  {
                    id: "adquisicion-suelos",
                    name: "Adquisición de suelos e inmuebles",
                    link: "https://example.com/adquisicion-suelos.pdf",
                  }
                ],
              },
              {
                id: "ejecucion-aplicacion-pago",
                name: "Ejecución, Aplicación y Pago",
                subProcesses: [
                  {
                    id: "gestion-contratos",
                    name: "Gestión de Contratos y estados de pago",
                    link: "https://example.com/gestion-contratos.pdf",
                  },
                  {
                    id: "gestion-subsidio",
                    name: "Gestión Administrativa del Subsidio",
                    link: "https://example.com/gestion-subsidio.pdf",
                  },
                  {
                    id: "pago-subsidio",
                    name: "Pago de Subsidio y/o pago de Asistencia Técnica",
                    link: "https://example.com/pago-subsidio.pdf",
                  },
                  {
                    id: "apoyo-ejecucion",
                    name: "Apoyo a la ejecución",
                    link: "https://example.com/apoyo-ejecucion.pdf",
                  }
                ],
              },
              {
                id: "post-entrega",
                name: "Post Entrega",
                subProcesses: [
                  {
                    id: "verificacion-fallas",
                    name: "Verificación de Fallas e Incumplimientos",
                    link: "https://example.com/verificacion-fallas.pdf",
                  },
                  {
                    id: "gestion-garantias",
                    name: "Gestión de las Garantías",
                    link: "https://example.com/gestion-garantias.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "administracion-bienes",
            name: "Administración de bienes públicos habitacionales y urbanos",
            subProcesses: [
              {
                id: "administracion-vivienda",
                name: "Administración de Vivienda Pública e Infraestructura Urbana",
                subProcesses: [
                  {
                    id: "vivienda-publica",
                    name: "Administración de vivienda pública",
                    link: "https://example.com/vivienda-publica.pdf",
                  },
                  {
                    id: "banco-suelos",
                    name: "Administración de Banco de Suelos",
                    link: "https://example.com/banco-suelos.pdf",
                  },
                  {
                    id: "bienes-inmuebles",
                    name: "Administración de bienes inmuebles",
                    link: "https://example.com/bienes-inmuebles.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "aseguramiento-calidad",
            name: "Aseguramiento de Calidad",
            subProcesses: [
              {
                id: "supervision-obras",
                name: "Supervisión técnica de obras y estudios y Fiscalización de calidad de inversión",
                subProcesses: [
                  {
                    id: "inspeccion-tecnica",
                    name: "Supervisión y/o inspección técnica de obras/estudios",
                    link: "https://example.com/inspeccion-tecnica.pdf",
                  },
                  {
                    id: "supervision-tecnica",
                    name: "Supervisión Asistencia Técnica",
                    link: "https://example.com/supervision-tecnica.pdf",
                  },
                  {
                    id: "fiscalizacion-subsidios",
                    name: "Fiscalización de subsidios",
                    link: "https://example.com/fiscalizacion-subsidios.pdf",
                  },
                  {
                    id: "fiscalizacion-pavimentacion",
                    name: "Fiscalización proyectos y obras de pavimentación y rotura/reposición de pavimentos",
                    link: "https://example.com/fiscalizacion-pavimentacion.pdf",
                  }
                ],
              }
            ],
          }
        ],
      },
      
      soporte: {
        title: "Procesos de Soporte",
        processes: [
          {
            id: "gestion-personas",
            name: "Gestión de Personas, Calidad de Vida Laboral y Bienes y Servicios",
            subProcesses: [
              {
                id: "desarrollo-personas",
                name: "Gestión y Desarrollo de Personas",
                subProcesses: [
                  {
                    id: "provision-personal",
                    name: "Provisión del Personal - Reclutamiento, selección y mantención",
                    link: "https://example.com/provision-personal.pdf",
                  },
                  {
                    id: "gestion-capacitacion",
                    name: "Gestión de la Capacitación",
                    link: "https://example.com/gestion-capacitacion.pdf",
                  }
                ],
              },
              {
                id: "bienestar-laboral",
                name: "Gestión del Bienestar Laboral",
                subProcesses: [
                  {
                    id: "evaluacion-condiciones",
                    name: "Evaluación de condiciones laborales físicas y sico-sociales",
                    link: "https://example.com/evaluacion-condiciones.pdf",
                  },
                  {
                    id: "mejoras-laborales",
                    name: "Implementación de mejoras de condiciones laborales",
                    link: "https://example.com/mejoras-laborales.pdf",
                  }
                ],
              },
              {
                id: "bienes-servicios",
                name: "Gestión de Bienes y Servicios",
                subProcesses: [
                  {
                    id: "gestion-compras",
                    name: "Gestión de Compras",
                    link: "https://example.com/gestion-compras.pdf",
                  },
                  {
                    id: "gestion-documental",
                    name: "Gestión Documental",
                    link: "https://example.com/gestion-documental.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "gestion-tecnologias-informacion",
            name: "Gestión de Tecnologías de Información",
            subProcesses: [
              {
                id: "soluciones-ti",
                name: "Construcción, Adquisición e Implementación de soluciones TI",
                subProcesses: [
                  {
                    id: "desarrollo-sistemas",
                    name: "Desarrollo, análisis y administración de Sistemas",
                    link: "https://example.com/desarrollo-sistemas.pdf",
                  }
                ],
              },
              {
                id: "soporte-ti",
                name: "Entrega de Servicio y Soporte TI",
                subProcesses: [
                  {
                    id: "gestion-redes",
                    name: "Gestión de redes",
                    link: "https://example.com/gestion-redes.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "gestion-juridica",
            name: "Gestión Jurídica",
            subProcesses: [
              {
                id: "revision-actos-administrativos",
                name: "Revisión o elaboración de actos administrativos",
                subProcesses: [
                  {
                    id: "dictacion-actos",
                    name: "Dictación de actos administrativos",
                    link: "https://example.com/dictacion-actos.pdf",
                  },
                  {
                    id: "evaluacion-actos",
                    name: "Evaluación y validación de actos administrativos",
                    link: "https://example.com/evaluacion-actos.pdf",
                  }
                ],
              },
              {
                id: "asesoria-juridica",
                name: "Asesoría y pronunciamiento sobre asuntos jurídicos",
                subProcesses: [
                  {
                    id: "asesoria-legales",
                    name: "Asesoría Asuntos Legales",
                    link: "https://example.com/asesoria-legales.pdf",
                  },
                  {
                    id: "asesoria-contratos",
                    name: "Asesoría Jurídica Contratos",
                    link: "https://example.com/asesoria-contratos.pdf",
                  }
                ],
              },
              {
                id: "gestion-judicial",
                name: "Gestión Judicial",
                subProcesses: [
                  {
                    id: "gestion-judicial",
                    name: "Gestión judicial",
                    link: "https://example.com/gestion-judicial.pdf",
                  }
                ],
              },
              {
                id: "control-sumarios",
                name: "Gestión y Control de Sumarios",
                subProcesses: [
                  {
                    id: "gestion-sumarios",
                    name: "Gestión y control de sumarios",
                    link: "https://example.com/gestion-sumarios.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "gestion-presupuestaria-contable",
            name: "Gestión Presupuestaria / Contable",
            subProcesses: [
              {
                id: "gestion-presupuestaria",
                name: "Gestión Presupuestaria",
                subProcesses: [
                  {
                    id: "identificacion-presupuestaria",
                    name: "Identificación / Modificación Presupuestaria",
                    link: "https://example.com/identificacion-presupuestaria.pdf",
                  },
                  {
                    id: "modificacion-inversiones",
                    name: "Modificación cartera de inversiones",
                    link: "https://example.com/modificacion-inversiones.pdf",
                  },
                  {
                    id: "programacion-financiera",
                    name: "Programación financiera mensual",
                    link: "https://example.com/programacion-financiera.pdf",
                  },
                  {
                    id: "solicitud-aporte-fiscal",
                    name: "Solicitud de aporte fiscal",
                    link: "https://example.com/solicitud-aporte-fiscal.pdf",
                  }
                ],
              },
              {
                id: "gestion-pagos",
                name: "Gestión de Pagos",
                subProcesses: [
                  {
                    id: "provision-fondos",
                    name: "Autorización y Provisión de fondos en BECH",
                    link: "https://example.com/provision-fondos.pdf",
                  },
                  {
                    id: "registro-pago",
                    name: "Registro Contable de Pago",
                    link: "https://example.com/registro-pago.pdf",
                  },
                  {
                    id: "revision-documentos-pago",
                    name: "Revisión de la Documentación de Pago",
                    link: "https://example.com/revision-documentos-pago.pdf",
                  },
                  {
                    id: "revision-pagos",
                    name: "Revisión de pagos efectivamente realizados",
                    link: "https://example.com/revision-pagos.pdf",
                  }
                ],
              },
              {
                id: "gestion-contable",
                name: "Gestión Contable",
                subProcesses: [
                  {
                    id: "autorizacion-documentos",
                    name: "Autorización de documentos para pagos y cobros",
                    link: "https://example.com/autorizacion-documentos.pdf",
                  },
                  {
                    id: "revision-devengo",
                    name: "Revisión de la documentación de Devengo (Gasto o Ingreso)",
                    link: "https://example.com/revision-devengo.pdf",
                  },
                  {
                    id: "registro-devengo",
                    name: "Registro Contable de Devengo",
                    link: "https://example.com/registro-devengo.pdf",
                  },
                  {
                    id: "informes-financieros",
                    name: "Elaboración y revisión de informes financieros",
                    link: "https://example.com/informes-financieros.pdf",
                  }
                ],
              }
            ],
          },
          {
            id: "gestion-comunicacion",
            name: "Gestión de la Comunicación",
            subProcesses: [
              {
                id: "contenido-medios",
                name: "Generación de contenido, difusión y relación con medios de comunicación",
                subProcesses: [
                  {
                    id: "gestion-medios",
                    name: "Gestión de medios de comunicación",
                    link: "https://example.com/gestion-medios.pdf",
                  }
                ],
              },
              {
                id: "contenido-comunicaciones-internas",
                name: "Generación de contenido y gestión de las comunicaciones internas",
                subProcesses: [
                  {
                    id: "gestion-comunicaciones-internas",
                    name: "Generación de contenido y gestión comunicaciones internas",
                    link: "https://example.com/comunicaciones-internas.pdf",
                  }
                ],
              }
            ],
          }
        ]
      }
    };
    
  export default processData;
  