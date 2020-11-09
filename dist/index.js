"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (ctx) => {
    ctx.modifyWebpackChain(args => {
        console.log(JSON.stringify(args));
        // args.chain.merge({
        //     defineConstants: {
        //         TESTBUILD:'testBuild'
        //     }
        // });
    });
};
//# sourceMappingURL=index.js.map