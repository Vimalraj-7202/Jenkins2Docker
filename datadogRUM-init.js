
import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';

datadogRum.init({
    applicationId: 'd8cd4e63-d07f-480b-9656-a9de844d97c0',
    clientToken: 'pub05de455db1c73af45cc788433c9885ed',
    site: 'us5.datadoghq.com',
    service: '<SERVICE_NAME>',
    env: '<ENV_NAME>',				// e.g. 'prod', 'staging-1', 'dev'
    version: '<VERSION_NUMBER>',	// e.g. '1.0.0'
    sessionSampleRate: 100,			// capture 100% of sessions
    sessionReplaySampleRate: 20,	// capture 20% of sessions with replay
    trackResources: true,			// Enable Resource tracking
    trackUserInteractions: true,	// Enable Action tracking
    trackLongTasks: true,			// Enable Long Tasks tracking
    
    plugins: [reactPlugin({ router: false })],
});