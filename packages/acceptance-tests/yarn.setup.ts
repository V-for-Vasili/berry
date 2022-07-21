import 'jest-json';
import {tests} from 'pkg-tests-core';

const {startPackageServer, getPackageRegistry} = tests;

jest.setTimeout(tests.TEST_TIMEOUT);

globalThis.test = test.concurrent;
globalThis.it = it.concurrent;

beforeEach(async () => {
  await startPackageServer();
  await getPackageRegistry();
});
