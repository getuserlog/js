# Installation

```sh
npm install --save @userlog/js
```

## Usage

### Import Library

```js
import { UserLog } from 'userlog';
```

### Initialize Client

```js
const userlog = new UserLog({
  api_key: 'YOUR-API-KEY',
  project: 'my-saas-name'
});
```

### Track Event

```js
userlog.track({
  channel: 'registrations',
  event: 'New User',
  icon: '🎉',
  user_id: 'user@example.com',
  tags: {
    source: 'website'
  },
  notify: false
});
```
