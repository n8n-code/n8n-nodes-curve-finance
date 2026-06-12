import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class CurveFinanceApi implements ICredentialType {
        name = 'N8nDevCurveFinanceApi';

        displayName = 'Curve Finance API';

        icon: Icon = { light: 'file:../nodes/CurveFinance/curve-finance.svg', dark: 'file:../nodes/CurveFinance/curve-finance.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://api.curve.finance/v1',
                        required: true,
                        placeholder: 'https://api.curve.finance/v1',
                        description: 'The base URL of your Curve Finance API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
