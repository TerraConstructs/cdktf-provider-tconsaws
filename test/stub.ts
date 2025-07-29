/**
 * Copyright (c) TerraConstructs.
 * SPDX-License-Identifier: MPL-2.0
 */

// // pnpm exec ts-node test/stub.ts
// import { Testing, TerraformStack,  } from "cdktf";
// import { signal, provider } from "../src/";
// const app = Testing.app();
// const stack = new TerraformStack(app, "test-stack");
// new signal.Signal(stack, "test-signal", {
//     queueUrl: "https://sqs.us-east-1.amazonaws.com/123456789012/test-queue",
//     signalId: "test-signal-id",
//     expectedCount: 1,
// });
// new provider.TconsawsProvider(stack, "test-provider", {
//     region: "us-east-1",
//     endpoints: [{
//         sqs: "https://sqs.us-east-1.amazonaws.com",
//     }],
// });
// const synth = Testing.synth(stack, true);
// console.log(synth);
