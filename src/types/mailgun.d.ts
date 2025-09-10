declare module 'mailgun.js' {
  import FormData from 'form-data';

  export interface MailgunClientOptions {
    username: string;
    key: string;
    url?: string;
    timeout?: number;
    host?: string;
  }

  export interface MailgunMessageData {
    from: string;
    to: string | string[];
    subject: string;
    text?: string;
    html?: string;
    attachment?: any;
    inline?: any;
    [key: string]: any;
  }

  export interface MailgunClient {
    messages: {
      create: (domain: string, data: MailgunMessageData) => Promise<any>;
    };
    domains: any;
    webhooks: any;
    events: any;
    stats: any;
    routes: any;
    validate: any;
    parse: any;
    ip_pools: any;
  }

  export default function Mailgun(formData: typeof FormData): {
    client: (options: MailgunClientOptions) => MailgunClient;
  };
}

declare module 'form-data' {
  class FormData {
    append(name: string, value: any, options?: any): void;
    getHeaders(): Record<string, string>;
    getBuffer(): Buffer;
    getBoundary(): string;
    getLength(callback: (err: Error | null, length: number) => void): void;
    getLengthSync(): number;
    hasKnownLength(): boolean;
    submit(
      params: string | URL,
      callback?: (error: Error | null, response: any) => void
    ): any;
    pipe<T extends NodeJS.WritableStream>(dest: T): T;
  }
  
  export = FormData;
}
