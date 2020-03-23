const httpCode = [
  {
    code: 100,
    status: 'Continue',
    note: '',
    group: 100,
    type: '1xx Informational response'
  },
  {
    code: 101,
    status: 'Switching Protocols',
    note: '',
    group: 100,
    type: '1xx Informational response'
  },
  {
    code: 102,
    status: 'Processing',
    note: 'WebDAV; RFC 2518',
    group: 100,
    type: '1xx Informational response'
  },
  {
    code: 103,
    status: 'Early Hints',
    note: 'RFC 8297, Checkpoint (Unofficial)',
    group: 100,
    type: '1xx Informational response'
  },
  {
    code: 200,
    status: 'OK',
    note: '',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 201,
    status: 'Created',
    note: '',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 202,
    status: 'Accepted',
    note: '',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 203,
    status: 'Non-Authoritative Information',
    note: 'since HTTP/1.1',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 204,
    status: 'No Content',
    note: '',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 205,
    status: 'Reset Content',
    note: '',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 206,
    status: 'Partial Content',
    note: 'RFC 7233',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 207,
    status: 'Multi-Status',
    note: 'WebDAV; RFC 4918',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 208,
    status: 'Already Reported',
    note: 'WebDAV; RFC 5842',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 218,
    status: 'This is fine',
    note: 'Apache Web Server',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 226,
    status: 'IM Used',
    note: 'RFC 3229',
    group: 200,
    type: '2xx Success'
  },
  {
    code: 300,
    status: 'Multiple Choices',
    note: '',
    group: 300,
    type: '3xx Redirection'
  },
  {
    code: 301,
    status: 'Moved Permanently',
    note: '',
    group: 300,
    type: '3xx Redirection'
  },
  {
    code: 302,
    status: 'Found',
    note: 'Previously "Moved temporarily"',
    group: 300,
    type: '3xx Redirection'
  },
  {
    code: 303,
    status: 'See Other',
    note: 'since HTTP/1.1',
    group: 300,
    type: '3xx Redirection'
  },
  {
    code: 304,
    status: 'Not Modified',
    note: 'RFC 7232',
    group: 300,
    type: '3xx Redirection'
  },
  {
    code: 305,
    status: 'Use Proxy',
    note: 'since HTTP/1.1',
    group: 300,
    type: '3xx Redirection'
  },
  {
    code: 306,
    status: 'Switch Proxy',
    note: '',
    group: 300,
    type: '3xx Redirection'
  },
  {
    code: 307,
    status: 'Temporary Redirect',
    note: 'since HTTP/1.1',
    group: 300,
    type: '3xx Redirection'
  },
  {
    code: 308,
    status: 'Permanent Redirect',
    note: 'RFC 7538',
    group: 300,
    type: '3xx Redirection'
  },
  {
    code: 400,
    status: 'Bad Request',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 401,
    status: 'Unauthorized',
    note: 'RFC 7235',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 402,
    status: 'Payment Required',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 403,
    status: 'Forbidden',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 404,
    status: 'Not Found',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 405,
    status: 'Method Not Allowed',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 406,
    status: 'Not Acceptable',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 407,
    status: 'Proxy Authentication Required',
    note: 'RFC 7235',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 408,
    status: 'Request Timeout',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 409,
    status: 'Conflict',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 410,
    status: 'Gone',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 411,
    status: 'Length Required',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 412,
    status: 'Precondition Failed',
    note: 'RFC 7232',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 413,
    status: 'Payload Too Large',
    note: 'RFC 7231',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 414,
    status: 'URI Too Long',
    note: 'RFC 7231',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 415,
    status: 'Unsupported Media Type',
    note: 'RFC 7231',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 416,
    status: 'Range Not Satisfiable',
    note: 'RFC 7233',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 417,
    status: 'Expectation Failed',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 418,
    status: 'I\'m a teapot',
    note: 'RFC 2324, RFC 7168',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 419,
    status: 'Page Expired',
    note: 'Laravel Framework',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 420,
    status: 'Method Failure',
    note: 'Spring Framework, Enhance Your Calm (Twitter)',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 421,
    status: 'Misdirected Request',
    note: 'RFC 7540',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 422,
    status: 'Unprocessable Entity',
    note: 'WebDAV; RFC 4918',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 423,
    status: 'Locked',
    note: 'WebDAV; RFC 4918',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 424,
    status: 'Failed Dependency',
    note: 'WebDAV; RFC 4918',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 425,
    status: 'Too Early',
    note: 'RFC 8470',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 426,
    status: 'Upgrade Required',
    note: '',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 428,
    status: 'Precondition Required',
    note: 'RFC 6585',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 429,
    status: 'Too Many Requests',
    note: 'RFC 6585',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 430,
    status: 'Request Header Fields Too Large',
    note: 'Shopify',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 431,
    status: 'Request Header Fields Too Large',
    note: 'RFC 6585',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 440,
    status: 'Login Time-out',
    note: 'Microsoft\'s Internet Information Services (IIS)',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 444,
    status: 'No Response',
    note: 'nginx',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 449,
    status: 'Retry With',
    note: 'Microsoft\'s Internet Information Services (IIS)',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 450,
    status: 'Blocked by Windows Parental Controls',
    note: 'Microsoft',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 451,
    status: 'Unavailable For Legal Reasons',
    note: 'RFC 7725, Redirect (Exchange ActiveSync) - Microsoft\'s Internet Information Services (IIS)',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 460,
    status: 'Client Closed Before Idle Timeout',
    note: 'AWS Elastic Load Balancer',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 463,
    status: 'Received X-Forwarded-For more than 30 IP',
    note: 'AWS Elastic Load Balancer',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 494,
    status: 'Request header too large',
    note: 'nginx',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 495,
    status: 'SSL Certificate Error',
    note: 'nginx',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 496,
    status: 'SSL Certificate Required',
    note: 'nginx',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 497,
    status: 'HTTP Request Sent to HTTPS Port',
    note: 'nginx',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 498,
    status: 'Invalid Token',
    note: 'Esri',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 499,
    status: 'Token Required, Client Closed Request',
    note: 'nginx',
    group: 400,
    type: '4xx Client errors'
  },
  {
    code: 500,
    status: 'Internal Server Error',
    note: '',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 501,
    status: 'Not Implemented',
    note: '',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 502,
    status: 'Bad Gateway',
    note: '',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 503,
    status: 'Service Unavailable',
    note: '',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 504,
    status: 'Gateway Timeout',
    note: '',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 505,
    status: 'HTTP Version Not Supported',
    note: '',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 506,
    status: 'Variant Also Negotiates',
    note: 'RFC 2295',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 507,
    status: 'Insufficient Storage',
    note: 'WebDAV; RFC 4918',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 508,
    status: 'Loop Detected',
    note: 'WebDAV; RFC 5842',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 509,
    status: 'Bandwidth Limit Exceeded',
    note: 'Apache Web Server/cPanel',
    group: 500,
    type: '5xx Server errors'
  },  
  {
    code: 510,
    status: 'Not Extended',
    note: 'RFC 2774',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 511,
    status: 'Network Authentication Required',
    note: 'RFC 6585',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 520,
    status: 'Web Server Returned an Unknown Error',
    note: 'Cloudflare',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 521,
    status: 'Web Server Is Down',
    note: 'Cloudflare',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 522,
    status: 'Connection Timed Out',
    note: 'Cloudflare',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 523,
    status: 'Origin Is Unreachable',
    note: 'Cloudflare',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 524,
    status: 'A Timeout Occurred',
    note: 'Cloudflare',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 525,
    status: 'SSL Handshake Failed',
    note: 'Cloudflare',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 526,
    status: 'Invalid SSL Certificate',
    note: 'Cloudflare',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 527,
    status: 'Railgun Error',
    note: 'Cloudflare',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 529,
    status: 'Site is overloaded',
    note: 'Qualys',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 530,
    status: 'Site is frozen',
    note: 'Pantheon, Error 530 is returned along with a 1xxx error',
    group: 500,
    type: '5xx Server errors'
  },
  {
    code: 598,
    status: '(Informal convention) Network read timeout error',
    note: '',
    group: 500,
    type: '5xx Server errors'
  }
];

exports.httpStatus = (code) => {
  return httpCode.filter(item => { return item.code === code ? item.status : 'Undefined'; });
}