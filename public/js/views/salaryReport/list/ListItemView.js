/**
 * Created by liliy on 20.01.2016.
 */
"use strict";
define([
        'Backbone',
        'Underscore',
        'text!templates/salaryReport/list/ListTemplate.html'
    ],

    function (Backbone, _, listTemplate) {
        var ListItemView = Backbone.View.extend({
            el: '#listTable',

            initialize: function (options) {
                this.collection = options.collection;
                this.year = options.year;
                this.month = options.month;
            },

            render: function () {
                this.$el.append(_.template(listTemplate, {collection: this.collection, year: this.year, month: this.month}));
            }
        });

        return ListItemView;
    });
