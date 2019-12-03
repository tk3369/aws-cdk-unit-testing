#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkJestTestStack } from '../lib/cdk-jest-test-stack';

const app = new cdk.App();
new CdkJestTestStack(app, 'CdkJestTestStack');
