
const CRUD_MAPPING = {
    index: {
        method: 'get',
        pattern: '/'
    },
    read: {
        method: 'get',
        pattern: '/:id'
    },
    create: {
        method: 'post',
        pattern: '/'
    },
    update: {
        method: 'put',
        pattern: '/:id'
    },
    delete: {
        method: 'delete',
        pattern: '/:id'
    }
}

/**
 * Attach CRUD controller to specified router
 *
 * @param router
 * @param controller
 * @param options
 * @constructor
 */
function AttachResourceController (router, controller, options = {}) {
   for (const action in CRUD_MAPPING) {
       const actionMap = CRUD_MAPPING[action];
       if (controller[action] && typeof controller[action] === 'function') {
           router[actionMap.method](actionMap.pattern, controller[action]);
       }
   }
}

module.exports = { AttachResourceController };
