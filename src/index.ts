export default (ctx) => {
    ctx.modifyWebpackChain(args => {
        console.log(args);
        // args.chain.merge({
        //     defineConstants: {
        //         TESTBUILD:'testBuild'
        //     }
        // });
    });
}