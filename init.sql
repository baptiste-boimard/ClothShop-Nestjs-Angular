--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2025-02-07 20:56:31

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 17182)
-- Name: cart; Type: TABLE; Schema: public; Owner: clothshop
--

CREATE TABLE public.cart (
    id integer NOT NULL,
    "idProduct" integer NOT NULL,
    quantity integer NOT NULL,
    "idUser" integer NOT NULL,
    "isValidate" boolean DEFAULT false NOT NULL,
    createdat timestamp without time zone
);


ALTER TABLE public.cart OWNER TO clothshop;

--
-- TOC entry 219 (class 1259 OID 17181)
-- Name: cart_id_seq; Type: SEQUENCE; Schema: public; Owner: clothshop
--

CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cart_id_seq OWNER TO clothshop;

--
-- TOC entry 4866 (class 0 OID 0)
-- Dependencies: 219
-- Name: cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: clothshop
--

ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;


--
-- TOC entry 218 (class 1259 OID 17172)
-- Name: product; Type: TABLE; Schema: public; Owner: clothshop
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    price numeric NOT NULL,
    stock integer NOT NULL,
    urlimage character varying NOT NULL,
    saled integer
);


ALTER TABLE public.product OWNER TO clothshop;

--
-- TOC entry 217 (class 1259 OID 17171)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: clothshop
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_id_seq OWNER TO clothshop;

--
-- TOC entry 4867 (class 0 OID 0)
-- Dependencies: 217
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: clothshop
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 216 (class 1259 OID 17116)
-- Name: user; Type: TABLE; Schema: public; Owner: clothshop
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    role character varying DEFAULT 'user'::character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO clothshop;

--
-- TOC entry 215 (class 1259 OID 17115)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: clothshop
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO clothshop;

--
-- TOC entry 4868 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: clothshop
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 4701 (class 2604 OID 17185)
-- Name: cart id; Type: DEFAULT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);


--
-- TOC entry 4700 (class 2604 OID 17175)
-- Name: product id; Type: DEFAULT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 4698 (class 2604 OID 17119)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 4860 (class 0 OID 17182)
-- Dependencies: 220
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: clothshop
--

COPY public.cart (id, "idProduct", quantity, "idUser", "isValidate", createdat) FROM stdin;
6	10	4	2	f	\N
5	9	3	2	f	\N
4	8	1	2	f	\N
3	7	4	2	f	\N
2	6	5	2	f	\N
1	5	1	1	f	\N
10	4	2	1	f	\N
9	3	1	1	f	\N
8	2	3	1	f	\N
7	1	2	1	f	\N
24	6	3	5	t	2025-02-07 20:51:53.499003
25	1	1	5	t	2025-02-07 20:51:53.502109
23	7	2	5	t	2025-02-07 20:51:53.504719
22	8	1	5	t	2025-02-07 20:51:53.506182
27	9	1	5	t	2025-02-07 20:51:53.50786
26	2	1	5	t	2025-02-07 20:51:53.509159
21	7	1	4	t	2025-02-07 20:52:15.04112
20	10	2	4	t	2025-02-07 20:52:15.042441
19	8	1	4	t	2025-02-07 20:52:15.043425
18	1	2	4	t	2025-02-07 20:52:15.044323
17	3	1	4	t	2025-02-07 20:52:15.045029
16	4	2	4	t	2025-02-07 20:52:15.04567
15	2	1	4	t	2025-02-07 20:52:15.046299
14	8	2	3	t	2025-02-07 20:53:20.57954
13	3	1	3	t	2025-02-07 20:53:20.583092
12	2	1	3	t	2025-02-07 20:53:20.584207
11	1	2	3	t	2025-02-07 20:53:20.585757
\.


--
-- TOC entry 4858 (class 0 OID 17172)
-- Dependencies: 218
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: clothshop
--

COPY public.product (id, name, description, price, stock, urlimage, saled) FROM stdin;
5	Veste en Jean	Veste en jean bleu classique pour toutes saisons	59.99	30	https://janedeboy-cdn.com/arts/1500/89121_01.jpg	21
1	Chausette Ninja	Chausettes Ninja venues depuis le fond des âges	149.99	195	https://bandssocks.com/cdn/shop/products/tortuesninja2-1.jpg?v=1597575744	127
6	Chemise Carreaux	Chemise à carreaux rouge et noire, 100% coton	34.99	37	https://cdn.laredoute.com/cdn-cgi/image/width=500,height=500,fit=pad,dpr=1/products/2/f/6/2f6f0fdd1b2d83aba918ebeff4a8a37f.jpg	8
9	Montre Classique	Montre analogique élégante avec bracelet cuir	89.99	14	https://herbelin.com/wp-content/uploads/2023/02/12248AP08_montre_herbelin_bracelet_cuir_homme.webp	8
7	Pantalon Cargo	Pantalon cargo beige avec poches latérales	44.99	97	https://www.ebolf.fr/fre_pl_Homme-Pantalon-cargo-Khaki-Bolf-77323A-94134_1.jpg	8
10	Casquette Noire	Casquette noire unisexe, ajustable	19.99	198	https://www.eram.fr/media/catalog/product/W/W/WWWERM_10792440032_0.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1560&width=1560&canvas=1560:1560	4
4	Chaussures de Sport	Chaussures de sport légères et confortables	69.99	198	https://cdn.sarenza.cloud/_img/productsv4/0000284261/0000284261_657901_09_504x690.jpg?202411051000&v=20180830155342	47
8	Blouson Cuir	Blouson en cuir véritable, coupe ajustée	129.99	56	https://www.fatherandsons.fr/media/cache/catalog/product/b/l/cropped/600x844/blouson-cuir-homme-uni-taupe-61470652_67-de2.jpg	10
3	Sweat à Capuche	Sweat à capuche noir avec poche ventrale	39.99	68	https://www.cocorico.store/cdn/shop/files/sweat-a-capuche-homme-coeur-bbr-made-in-france_98a876bc-379b-47bc-95da-4b7791770f56.jpg?v=1711457069&width=1056	23
2	Jean Slim	Jean slim bleu foncé pour un style tendance	49.99	97	https://www.mangooutlet.com/assets/rcs/pics/static/T4/fotos/S/47000155_TM.jpg?imwidth=2048&imdensity=1&ts=1687194195774	16
\.


--
-- TOC entry 4856 (class 0 OID 17116)
-- Dependencies: 216
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: clothshop
--

COPY public."user" (id, email, password, role) FROM stdin;
1	bouketin27@gmail.com	$2b$10$pNxv.4rp4k8gVFDV1y1AH.r9WnshMBiMLYFCDZFXuB6HoS3AwMtp2	admin
2	baptiste.boimard@gmail.com	$2b$10$cVBv2N7ScX3sYH2SEO/FDeqXkvoHiajeJr09gMspel5ESr97QyDXm	user
4	dragibus@gmail.com	$2b$10$xInXYm3u0BIILh/PX.NN6etdESdapdg0g8G1P/JFIftDR0EjCMObW	user
5	panda@gmail.com	$2b$10$ercAbWMMUbTpleBtEXsSo.eySiDK9VTdbHV2J0Q0IVVrnshz.ocKK	user
3	nounours@gmail.com	$2b$10$0eYgSDmnTIGhLx.kni.aTOkvh.D3oNvUarCd0QGi2kUdxmLFdVCp6	user
\.


--
-- TOC entry 4869 (class 0 OID 0)
-- Dependencies: 219
-- Name: cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: clothshop
--

SELECT pg_catalog.setval('public.cart_id_seq', 11, true);


--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 217
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: clothshop
--

SELECT pg_catalog.setval('public.product_id_seq', 16, true);


--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: clothshop
--

SELECT pg_catalog.setval('public.user_id_seq', 11, true);


--
-- TOC entry 4708 (class 2606 OID 17179)
-- Name: product PK_bebc9158e480b949565b4dc7a82; Type: CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id);


--
-- TOC entry 4710 (class 2606 OID 17189)
-- Name: cart PK_c524ec48751b9b5bcfbf6e59be7; Type: CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY (id);


--
-- TOC entry 4704 (class 2606 OID 17124)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 4706 (class 2606 OID 17126)
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- TOC entry 4711 (class 2606 OID 17190)
-- Name: cart FK_0f0adf0d6594e09f8a2e7fa311e; Type: FK CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT "FK_0f0adf0d6594e09f8a2e7fa311e" FOREIGN KEY ("idProduct") REFERENCES public.product(id);


-- Completed on 2025-02-07 20:56:31

--
-- PostgreSQL database dump complete
--

