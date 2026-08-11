# payments-api

Internal payments service.

| Endpoint | Method | Description |
|---|---|---|
| `/charges` | POST | Create a charge |
| `/refunds` | POST | Refund a charge |
| `/health`  | GET  | Liveness probe |

## Deprecations

The 2024 legacy gateway was removed in favour of the `money` + `refunds` modules.
