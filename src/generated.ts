export type fragmentChunks =
  | 'alphamap_fragment'
  | 'alphamap_pars_fragment'
  | 'alphatest_fragment'
  | 'aomap_fragment'
  | 'aomap_pars_fragment'
  | 'bumpmap_pars_fragment'
  | 'clipping_planes_fragment'
  | 'clipping_planes_pars_fragment'
  | 'color_fragment'
  | 'color_pars_fragment'
  | 'cube_uv_reflection_fragment'
  | 'emissivemap_fragment'
  | 'emissivemap_pars_fragment'
  | 'encodings_fragment'
  | 'encodings_pars_fragment'
  | 'envmap_fragment'
  | 'envmap_common_pars_fragment'
  | 'envmap_pars_fragment'
  | 'envmap_physical_pars_fragment'
  | 'fog_fragment'
  | 'fog_pars_fragment'
  | 'gradientmap_pars_fragment'
  | 'lightmap_fragment'
  | 'lightmap_pars_fragment'
  | 'lights_toon_fragment'
  | 'lights_toon_pars_fragment'
  | 'lights_phong_fragment'
  | 'lights_phong_pars_fragment'
  | 'lights_physical_fragment'
  | 'lights_physical_pars_fragment'
  | 'lights_fragment_begin'
  | 'lights_fragment_maps'
  | 'lights_fragment_end'
  | 'logdepthbuf_fragment'
  | 'logdepthbuf_pars_fragment'
  | 'map_fragment'
  | 'map_pars_fragment'
  | 'map_particle_fragment'
  | 'map_particle_pars_fragment'
  | 'metalnessmap_fragment'
  | 'metalnessmap_pars_fragment'
  | 'normal_fragment_begin'
  | 'normal_fragment_maps'
  | 'normalmap_pars_fragment'
  | 'clearcoat_normal_fragment_begin'
  | 'clearcoat_normal_fragment_maps'
  | 'clearcoat_pars_fragment'
  | 'premultiplied_alpha_fragment'
  | 'dithering_fragment'
  | 'dithering_pars_fragment'
  | 'roughnessmap_fragment'
  | 'roughnessmap_pars_fragment'
  | 'shadowmap_pars_fragment'
  | 'shadowmask_pars_fragment'
  | 'specularmap_fragment'
  | 'specularmap_pars_fragment'
  | 'tonemapping_fragment'
  | 'tonemapping_pars_fragment'
  | 'transmissionmap_fragment'
  | 'transmissionmap_pars_fragment'
  | 'uv_pars_fragment'
  | 'uv2_pars_fragment'
  | 'background_frag'
  | 'cube_frag'
  | 'depth_frag'
  | 'distanceRGBA_frag'
  | 'equirect_frag'
  | 'linedashed_frag'
  | 'meshbasic_frag'
  | 'meshlambert_frag'
  | 'meshmatcap_frag'
  | 'meshtoon_frag'
  | 'meshphong_frag'
  | 'meshphysical_frag'
  | 'normal_frag'
  | 'points_frag'
  | 'shadow_frag'
  | 'sprite_frag';
export type vertexChunks =
  | 'begin_vertex'
  | 'beginnormal_vertex'
  | 'clipping_planes_pars_vertex'
  | 'clipping_planes_vertex'
  | 'color_pars_vertex'
  | 'color_vertex'
  | 'defaultnormal_vertex'
  | 'displacementmap_pars_vertex'
  | 'displacementmap_vertex'
  | 'envmap_pars_vertex'
  | 'envmap_vertex'
  | 'fog_vertex'
  | 'fog_pars_vertex'
  | 'lights_lambert_vertex'
  | 'logdepthbuf_pars_vertex'
  | 'logdepthbuf_vertex'
  | 'morphnormal_vertex'
  | 'morphtarget_pars_vertex'
  | 'morphtarget_vertex'
  | 'project_vertex'
  | 'shadowmap_pars_vertex'
  | 'shadowmap_vertex'
  | 'skinbase_vertex'
  | 'skinning_pars_vertex'
  | 'skinning_vertex'
  | 'skinnormal_vertex'
  | 'uv_pars_vertex'
  | 'uv_vertex'
  | 'uv2_pars_vertex'
  | 'uv2_vertex'
  | 'worldpos_vertex'
  | 'background_vert'
  | 'cube_vert'
  | 'depth_vert'
  | 'distanceRGBA_vert'
  | 'equirect_vert'
  | 'linedashed_vert'
  | 'meshbasic_vert'
  | 'meshlambert_vert'
  | 'meshmatcap_vert'
  | 'meshtoon_vert'
  | 'meshphong_vert'
  | 'meshphysical_vert'
  | 'normal_vert'
  | 'points_vert'
  | 'shadow_vert'
  | 'sprite_vert';
export type commonChunks = 'bsdfs' | 'common' | 'lights_pars_begin' | 'packing';
