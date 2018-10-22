const passport = require('passport');
const PassportGoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(
    new PassportGoogleStrategy(
        {
            clientID:keys.googleClientID,
            clientSecret:keys.googleClientSecret,
            callbackURL:'/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            User.findOne({ googleId:profile.id })
                .then( existingUser => {
                    if (existingUser) {
                        console.log("Existing:", profile.id)
                        done(null, existingUser);
                    }else{
                        new User({ googleId:profile.id }).save()
                        .then( user => {
                            console.log("Created:", profile.id)
                            done(null, user)
                        });
                    }
                });
        }
    )
);