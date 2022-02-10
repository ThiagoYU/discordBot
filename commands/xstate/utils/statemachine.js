const { createMachine, interpret } = require('xstate');
const { context } = require('../../werewolf/utils/stateMachine');

const toggleMachine = createMachine(
    {
        id: 'toggle',
        initial: 'inactive',
        context: {
            t: "test",
            c: 0
        },
        states: {
            inactive: {
                on: { 
                    TEST: [
                        {
                            cond: (context) => context.c % 3 == 0,
                            target: 'active',
                            actions: ['printHey']
                        },
                        {
                            target: 'inactive',
                            actions: ['printCounter']
                        }
                    ]
                    
                } 
            },
            active:   {
                on: { 
                    TEST: {
                        target: 'inactive', 
                        actions: ['printCounter'],
                    } 
                } 
            },
        },
    },
    {
        actions: {
            printCounter: (context) => {
                console.log(context.c)
                context.c++
            },
            printHey: (context) => {
                console.log("Hey")
                context.c++
            }
        }
    },
    {
        guards: {
            checkCount: (context) => context.c % 3 == 0
        }
    }
);

const toggleService = interpret(toggleMachine).start()

for(let i = 0; i < 100; i++) {
    toggleService.send('TEST')
}
