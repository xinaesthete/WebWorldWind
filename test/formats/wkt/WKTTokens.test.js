/*
 * Copyright (C) 2014 United States Government as represented by the Administrator of the
 * National Aeronautics and Space Administration. All Rights Reserved.
 */
define([
    'src/geom/Location',
    'src/geom/Position',
    'src/formats/wkt/geom/WKTPoint',
    'src/formats/wkt/WKTTokens'
], function (
    Location,
    Position,
    WKTPoint,
    WKTTokens
){
    "use strict";

    describe("WKTTokens", function () {
        describe("Point", function() {
            it('correctly parses 2D point', function(){
                var point2D = 'POINT (14.5 50)';
                var wktObjects = new WKTTokens(point2D).objects();

                expect(wktObjects.length).toBe(1);
                expect(wktObjects[0] instanceof WKTPoint).toBeTruthy();
                expect(wktObjects[0].reference().equals(new Location(14.5, 50))).toBeTruthy();
            });

            it('correctly parses 3D point', function(){
                var point3D = 'POINT Z(14.5 50 13)';
                var wktObjects = new WKTTokens(point3D).objects();

                expect(wktObjects.length).toBe(1);
                expect(wktObjects[0] instanceof WKTPoint).toBeTruthy();
                expect(wktObjects[0].reference().equals(new Position(14.5, 50, 13))).toBeTruthy();
            });

            it('correctly ignores the LRS for 2D point', function(){
                var point2DLrs = 'POINT M (14.5 50 10)';
                var wktObjects = new WKTTokens(point2DLrs).objects();

                expect(wktObjects.length).toBe(1);
                expect(wktObjects[0] instanceof WKTPoint).toBeTruthy();
                expect(wktObjects[0].reference().equals(new Location(14.5, 50))).toBeTruthy();
            });

        });

        describe('Polygon', function() {

        });

        describe('LineString', function(){

        });

        describe('MultiPoint', function(){

        });

        describe('MultiLineString', function(){

        });

        describe('MultiPolygon', function(){

        });
    });
});

