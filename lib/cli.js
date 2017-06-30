'use strict';

module.exports = (args) => {
    const argv      = require('minimist')(args, { alias: { h: 'help', v: 'version' }});
    const command   = (argv._ && argv._.length > 0) ? argv._[0] : 'help';

   if (argv.version) {
        console.log('CLI version', require('../package').version);
    } else {
        switch (command) {
            case 'help':
                console.log([
                    'Usage: mol [command] [options]',
                    '',
                    'Commands:',
                    '    get [dir, extension]                   gets the redundant atomic groups',
                    '    set [atom1, atom2, ..., molecule1]     sets the molecule class istead of atom classes',
                    '',
                    'Options:',
                    '    -h, --help                             prints this text',
                    '    -v, --version                          prints the version',
                    '',
                    'Running on samlpe data:',
                    'mol get C:\\work\\css-molecule-factory\\lib\\sample-data .html'
                ].join('\n'));
                break;
            case 'get':
                require('../lib/command-get')(argv._[1], argv._[2]);
                break;
            case 'set':
                require('../lib/command-set')();
                break;
            default:
                console.log('Unknown command');
        }
    }
};
