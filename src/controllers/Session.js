'use strict';

exports.show = (req, res) => {
  var out = {
    isAuthenticated: req.isAuthenticated(),
  };
  if (req.isAuthenticated()) {
    out['summary'] = req.user.summary;
  };
  res.json(out);
};

exports.profile = (req, res) => {
  if (req.isAuthenticated()) {
    res.json(req.user.profile);
  } else {
    res.sendStatus(403);
  }
};

exports.update = (req, res) => {
  if (req.isAuthenticated()) {
    co(function *() {
      var fields = _.pick(req.body, [
            'first_name',
            'last_name',
            'email',
            'avatar_url',
            'phone_number',
          ]);
      yield req.user.update(fields);
      res.json(req.user.profile);
    })();
  } else {
    res.sendStatus(403);
  }
};
