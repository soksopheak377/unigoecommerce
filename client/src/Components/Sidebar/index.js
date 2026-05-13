import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

import bannerimg from '../../Assets/banners/sidebar-banner.gif';


const Sidebar = () => {
    const [value, setValue] = useState([100, 60000]);

    return (
        <>
            <div className="sidebar sticky">
                    <div className="filterBox">
                        <h6>Product Categories</h6>
                        <div className="scroll">
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Men" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Women" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Beauty" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Kids" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* product range */}
                    <div className="filterBox">
                        <h6>FILTER BY PRICE</h6>
                        <div className="mt-3">
                            <RangeSlider
                                min={0}
                                max={60000}
                                value={value}
                                onInput={(value) => setValue(value)}
                                step={5}
                            />
                            <div className='d-flex pt-2 pb-2 priceRange'>
                                <span>From: <strong className='text-dark'>Riel: {value[0]}</strong></span>
                                <span className='ml-auto'>From: <strong className='text-dark'>Reil: {value[1]}</strong></span>
                            </div>
                        </div>
                    </div>

                    {/* filter status */}
                    <div className="filterBox mb-0">
                        <h6>PRODUCT STATUS</h6>
                        <div className="scroll">
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="In Stock" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="On Sale" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* brand */}

                    <div className="filterBox">
                        <h6>BRANDS</h6>
                        <div className="scroll">
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Lacos" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Nice" />
                                </li>

                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox defaultChecked />} label="Adiddas" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* banner */}
                    <br />
                    <Link to="#">
                        <img src={bannerimg} className='w-100' />
                    </Link>
                </div>
        </>
    );
}

export default Sidebar;