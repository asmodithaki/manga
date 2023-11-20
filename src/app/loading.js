'use client';

import React from 'react';

export default function Loading(){

    return (
        <div className="loading">
            <div className="loading__container">
                <div className="loading__container__loader">
                    <div className="loading__container__loader__circle"></div>
                    <div className="loading__container__loader__circle"></div>
                    <div className="loading__container__loader__circle"></div>
                </div>
                <div className="loading__container__text">Loading</div>
            </div>
        </div>
    )
}