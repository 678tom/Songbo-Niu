const { PrismaClient } = require('@prisma/client');
const { convert, LOWERCASE_TRANSFORMER } = require('url-slug');

const businesses = require('./business_data.json');
const db = new PrismaClient();

const slugify = (input) => {
  return convert(input, {
    separator: '-',
    transformer: LOWERCASE_TRANSFORMER,
  });
};

(async () => {
  await db.business.deleteMany({});

  for (const business of businesses) {
    business.business_slug = slugify(business.business_name);
    await db.business.create({
      data: business,
    });
  }
})();
