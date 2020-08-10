const x = {
  teleport: {
    type: 'literal',
    children: {
      destination: {
        type: 'argument',
        parser: 'minecraft:entity',
        properties: {
          amount: 'single',
          type: 'entities',
        },
        executable: true,
      },
      location: {
        type: 'argument',
        parser: 'minecraft:vec3',
        executable: true,
      },
      targets: {
        type: 'argument',
        parser: 'minecraft:entity',
        properties: {
          amount: 'multiple',
          type: 'entities',
        },
        children: {
          destination: {
            type: 'argument',
            parser: 'minecraft:entity',
            properties: {
              amount: 'single',
              type: 'entities',
            },
            executable: true,
          },
          location: {
            type: 'argument',
            parser: 'minecraft:vec3',
            children: {
              facing: {
                type: 'literal',
                children: {
                  entity: {
                    type: 'literal',
                    children: {
                      facingEntity: {
                        type: 'argument',
                        parser: 'minecraft:entity',
                        properties: {
                          amount: 'single',
                          type: 'entities',
                        },
                        children: {
                          facingAnchor: {
                            type: 'argument',
                            parser: 'minecraft:entity_anchor',
                            executable: true,
                          },
                        },
                        executable: true,
                      },
                    },
                  },
                  facingLocation: {
                    type: 'argument',
                    parser: 'minecraft:vec3',
                    executable: true,
                  },
                },
              },
              rotation: {
                type: 'argument',
                parser: 'minecraft:rotation',
                executable: true,
              },
            },
            executable: true,
          },
        },
      },
    },
  },
}
